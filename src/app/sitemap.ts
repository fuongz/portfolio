import { getClient } from '@/lib/sanity/sanity.client'
import { sitemapQuery } from '@/lib/sanity/sanity.queries'
import { MetadataRoute } from 'next'
const EXTERNAL_DATA_URL: string = process.env.NEXT_PUBLIC_ROOT_URL as string

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const client = getClient()
  const slugs = await client.fetch<{
    posts: { slug: string; publishedAt: string }[]
    categories: { slug: string; publishedAt: string }[]
  }>(sitemapQuery)

  const postsSiteMap = slugs.posts.map((post) => ({
    url: `${EXTERNAL_DATA_URL}/posts/${post.slug}`,
    lastModified: post.publishedAt,
  }))

  const categoriesSiteMap = slugs.categories.map((category) => ({
    url: `${EXTERNAL_DATA_URL}/posts?category=${category.slug}`,
    lastModified: category.publishedAt,
  }))

  return [
    {
      url: EXTERNAL_DATA_URL,
      lastModified: new Date(),
    },
    {
      url: `${EXTERNAL_DATA_URL}/posts`,
      lastModified: new Date(),
    },
    ...categoriesSiteMap,
    ...postsSiteMap,
  ]
}
