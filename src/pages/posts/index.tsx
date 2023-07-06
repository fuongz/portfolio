import type { Post as PostType } from './../../@types/Post'

import PostList from '@/components/PostList/PostList'
import Container from '@/components/Shared/Container'
import Tag from '@/components/Shared/Tag'
import fs from 'fs'
import matter from 'gray-matter'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import { getCanonicalUrl, getPageTitle } from 'utils/seo-helper'
import { randomString } from 'utils/string-helper'

interface BlogPageProps {
  posts: PostType[]
  tags: any
}

const BlogPage: React.FC<BlogPageProps> = ({ posts, tags }) => {
  const randomId: string = randomString(10)
  const router = useRouter()
  const localPosts = useMemo(() => {
    if (!router?.query?.tag) {
      return posts
    }
    return posts.filter((post) => {
      return post.frontmatter.tags.includes(router.query.tag as string)
    })
  }, [posts, router.query.tag])
  return (
    <>
      <NextSeo
        title={getPageTitle('Posts')}
        description={'All fuongz articles.'}
        canonical={getCanonicalUrl('posts')}
      />
      <Container>
        <div className="flex gap-4">
          <h1>Blog</h1>
          <p className="text-base font-normal text-zinc-400 italic">
            ({localPosts.length} posts)
          </p>
        </div>
        <div className="mb-4 flex gap-4 items-center border-b dark:border-b-zinc-900 pb-2">
          <span className="text-sm font-semibold">Tags:</span>
          {tags &&
            Object.keys(tags).length > 0 &&
            Object.keys(tags).map((tag: string, index: number) => (
              <Tag
                key={`${randomId}-${tag}-${index}`}
                value={tag}
                count={tags[tag]}
                hasActiveState
              ></Tag>
            ))}
        </div>
        <PostList posts={localPosts} />
      </Container>
    </>
  )
}

export default BlogPage

export async function getStaticProps() {
  try {
    const files = fs.readdirSync('contents')
    const posts: {
      slug: string
      frontmatter: {
        [key: string]: any
      }
    }[] = files.map((fileName) => {
      const slug = fileName.replace('.mdx', '')
      const readFile = fs.readFileSync(`contents/${fileName}`, 'utf8')
      const { data: frontmatter } = matter(readFile)
      return {
        slug,
        frontmatter,
      }
    })
    const tags: any = posts.map((post) => post.frontmatter.tags)
    return {
      props: {
        posts,
        tags: tags.flat().reduce((tag: any, prev: any) => {
          tag[prev] = ++tag[prev] || 1
          return tag
        }, {}),
      },
    }
  } catch (err: any) {
    return { props: {} }
  }
}
