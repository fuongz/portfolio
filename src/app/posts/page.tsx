import PostsPage from '@/components/pages/posts/PostsPage'
import { getClient } from '@/lib/sanity/sanity.client'
import { indexQuery } from '@/lib/sanity/sanity.queries'
import { notFound } from 'next/navigation'

export default async function PostsIndexRoute() {
  const client = getClient()
  const data = await client.fetch<any | null>(indexQuery)

  if (!data) {
    notFound()
  }

  return <PostsPage data={data} />
}
