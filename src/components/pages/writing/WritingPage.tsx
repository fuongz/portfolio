'use client'

import PostList from '@/components/PostList/PostList'
import Container from '@/components/Shared/Container'
import Tag from '@/components/Shared/Tag'
import { Category, Post } from '@/lib/sanity/sanity.queries'

export interface WritingPageProps {
  data: Post[] | []
  categories: Category[] | []
}

export default function WritingPage({ data, categories }: WritingPageProps) {
  return (
    <Container>
      <div className="flex gap-4">
        <h1>Notes</h1>
      </div>
      <div className="mb-4 flex flex-wrap w-full gap-4 items-center border-b dark:border-b-zinc-900 pb-2">
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
