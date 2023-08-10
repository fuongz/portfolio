import PostSinglePageComponent from '@/components/pages/posts/PostSinglePage'
import { getClient } from '@/lib/sanity/sanity.client'
import {
  Post,
  postBySlugQuery,
  postSlugsQuery,
} from '@/lib/sanity/sanity.queries'
import { notFound } from 'next/navigation'

type Props = {
  params: { slug: string }
}

export async function generateStaticParams() {
  const client = getClient()
  const slugs = await client.fetch<string[]>(postSlugsQuery)
  return slugs.map((slug) => ({ slug }))
}

export default async function PostSlugRoute({ params }: Props) {
  const { slug } = params
  const client = getClient()
  const data: any = await client.fetch<Post | null>(postBySlugQuery, {
    slug,
  })

  if (!data) {
    notFound()
  }

  return <PostSinglePageComponent data={data} />
}
