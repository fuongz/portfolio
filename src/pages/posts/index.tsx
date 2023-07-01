import type { Post as PostType } from './../../@types/Post'

import PostList from '@/components/PostList/PostList'
import Container from '@/components/Shared/Container'
import fs from 'fs'
import matter from 'gray-matter'
import Head from 'next/head'

interface BlogPageProps {
  posts: PostType[]
}

const BlogPage: React.FC<BlogPageProps> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Posts - fuongz - phuongphung.com</title>
      </Head>
      <Container>
        <h1>Blog</h1>
        <PostList posts={posts} />
      </Container>
    </>
  )
}

export default BlogPage

export async function getStaticProps() {
  try {
    const files = fs.readdirSync('contents')
    const posts = files.map((fileName) => {
      const slug = fileName.replace('.mdx', '')
      const readFile = fs.readFileSync(`contents/${fileName}`, 'utf8')
      const { data: frontmatter } = matter(readFile)
      return {
        slug,
        frontmatter,
      }
    })
    return {
      props: {
        posts,
      },
    }
  } catch (err: any) {
    return { props: {} }
  }
}
