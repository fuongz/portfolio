'use client'

import { AnimatedGroup } from '@/components/core/Animation/animated-group'
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
    <Container isProse>
      <AnimatedGroup
        variants={{
          container: {
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.05,
              },
            },
          },
          item: {
            hidden: { opacity: 0, y: 40, filter: 'blur(4px)' },
            visible: {
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
              transition: {
                duration: 1,
                type: 'spring',
                bounce: 0.3,
              },
            },
          },
        }}
      >
        <div className="flex gap-4">
          <h1>Notes</h1>
        </div>
        <div className="mb-4 flex flex-wrap w-full gap-1 xl:gap-4 items-center border-b dark:border-b-zinc-900 pb-2">
          {categories &&
            categories.length > 0 &&
            categories.map((tag, index: number) => (
              <Tag
                key={`${tag._id}-${index}`}
                value={tag.slug}
                hasActiveState
              />
            ))}
        </div>
        <PostList posts={data} />
      </AnimatedGroup>
    </Container>
  )
}
