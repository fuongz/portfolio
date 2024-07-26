import { getClient } from '@/lib/sanity/sanity.client'
import { sitemapQuery } from '@/lib/sanity/sanity.queries'
import fetcher from '@/services/fetcher.service'
import { kv } from '@vercel/kv'
import { MetadataRoute } from 'next'
const EXTERNAL_DATA_URL: string = process.env.NEXT_PUBLIC_ROOT_URL as string
const projectNames = process.env.NEXT_PUBLIC_PROJECT_NAMES
  ? JSON.parse(process.env.NEXT_PUBLIC_PROJECT_NAMES as string)
  : []

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const client = getClient()
  const slugs = await client.fetch<{
    posts: { slug: string; publishedAt: string }[]
    categories: { slug: string; publishedAt: string }[]
    changeFrequency: 'daily'
  }>(sitemapQuery)

  const postsSiteMap = slugs.posts.map((post) => ({
    url: `${EXTERNAL_DATA_URL}/posts/${post.slug}`,
    changeFrequency: 'daily',
    lastModified: post.publishedAt,
  }))

  const categoriesSiteMap = slugs.categories.map((category) => ({
    url: `${EXTERNAL_DATA_URL}/posts?category=${category.slug}`,
    changeFrequency: 'daily',
    lastModified: category.publishedAt,
  }))

  // Projects
  let pageData: Array<Array<any>> | null = await kv.hget(
    'homepage_cache',
    'data'
  )
  if (!pageData) {
    console.log('⛔️ Cache missing!')
    pageData = await Promise.all<[Array<any>]>([
      fetcher('https://api.github.com/users/fuongz/repos'),
    ])
    await kv.hset('homepage_cache', { data: pageData })
    await kv.expire('homepage_cache', 3600)
  } else {
    console.log('✅ Cache HIT!')
  }
  const [projects] = pageData

  return [
    {
      url: EXTERNAL_DATA_URL,
      lastModified: new Date(),
      changeFrequency: 'daily',
    },
    {
      url: `${EXTERNAL_DATA_URL}/posts`,
      lastModified: new Date(),
      changeFrequency: 'daily',
    },
    ...categoriesSiteMap,
    ...postsSiteMap,
    ...projects
      .filter((p) => projectNames.includes(p.name))
      .map((project): any => ({
        url: `${EXTERNAL_DATA_URL}/projects/${project.name}`,
        lastModified: project.pushed_at,
        changeFrequency: 'daily',
      })),
  ]
}
