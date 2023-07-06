import type { NextPage } from 'next'
import fs from 'fs'
import matter from 'gray-matter'
import Container from '@/components/Shared/Container'
import type { PostFrontmatter } from './../../@types/Post'
import styles from '@/styles/Post/Post.module.css'
import { useRouter } from 'next/router'
import md from 'markdown-it'
import highlightjs from 'markdown-it-highlightjs'
import { NextSeo } from 'next-seo'
import { getCanonicalUrl } from 'utils/seo-helper'
import Link from 'next/link'
import Tag from '@/components/Shared/Tag'

interface SinglePostProps {
  frontmatter: PostFrontmatter
  content: any
}

const SinglePost: NextPage<SinglePostProps> = ({ frontmatter, content }) => {
  const router = useRouter()

  return (
    <>
      <NextSeo
        title={frontmatter.title}
        description={frontmatter.metaDesc}
        canonical={getCanonicalUrl('posts', router?.query?.slug as string)}
      />
      <Container>
        <h1>{frontmatter.title}</h1>
        <div className={styles['post__meta']}>
          <div className={styles['post__date']}>{frontmatter.date}</div>
          <div className={styles['post__tags']}>
            {frontmatter.tags.length > 0 &&
              frontmatter.tags.map((tag) => (
                <Tag value={tag} key={`tag-${router.query.slug}-${tag}`} />
              ))}
          </div>
        </div>

        <div
          dangerouslySetInnerHTML={{
            __html: md().use(highlightjs, { inline: true }).render(content),
          }}
        />

        <Link href="/posts" className={styles['post__go-back']}>
          {'<--'} Back to Posts
        </Link>
      </Container>
    </>
  )
}

export default SinglePost

export async function getStaticPaths() {
  try {
    const files = fs.readdirSync('contents')
    const paths = files.map((fileName) => ({
      params: {
        slug: fileName.replace('.mdx', ''),
      },
    }))
    return {
      paths,
      fallback: 'blocking',
    }
  } catch (err: any) {
    return {
      paths: [],
      fallback: false,
    }
  }
}

export async function getStaticProps({
  params: { slug },
}: {
  params: { slug: string }
}) {
  try {
    const fileName = fs.readFileSync(`contents/${slug}.mdx`, 'utf-8')
    const { data: frontmatter, content } = matter(fileName)
    return {
      props: {
        frontmatter,
        content,
      },
    }
  } catch (err: any) {
    return {
      props: {},
    }
  }
}
