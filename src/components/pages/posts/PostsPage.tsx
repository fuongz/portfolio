'use client'

import PostList from '@/components/PostList/PostList'
import Container from '@/components/Shared/Container'
import Tag from '@/components/Shared/Tag'
import { Category, Post } from '@/lib/sanity/sanity.queries'

export interface PostsPageProps {
  data: Post[] | []
  categories: Category[] | []
}

export default function PostsPage({ data, categories }: PostsPageProps) {
  return (
    <Container>
      <div className="flex gap-4">
        <h1>Blog</h1>
        <p className="text-base font-normal text-zinc-400 italic">
          ({data.length} posts)
        </p>
      </div>
      <div className="mb-4 flex gap-4 items-center border-b dark:border-b-zinc-900 pb-2">
        <span className="text-sm font-semibold">Categories:</span>
        {categories &&
          categories.length > 0 &&
          categories.map((tag, index: number) => (
            <Tag key={`${tag._id}-${index}`} value={tag.slug} hasActiveState />
          ))}
      </div>
      <PostList posts={data} />
    </Container>
  )
}
