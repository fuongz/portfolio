'use client'

import PostList from '@/components/PostList/PostList'
import Container from '@/components/Shared/Container'

export interface PostsPageProps {
  data: any | null
}

export default function PostsPage({ data }: PostsPageProps) {
  return (
    <Container>
      <div className="flex gap-4">
        <h1>Blog</h1>
        <p className="text-base font-normal text-zinc-400 italic">
          ({data.length} posts)
        </p>
      </div>
      <PostList posts={data} />
    </Container>
  )
}
