import type { NextPage } from 'next'
import fs from 'fs'
import matter from 'gray-matter'
import Container from '@/components/Shared/Container'
import type { PostFrontmatter } from './../../@types/Post'
import styles from '@/styles/Post/Post.module.css'
import { useRouter } from 'next/router'
import md from 'markdown-it'

interface SinglePostProps {
  frontmatter: PostFrontmatter
  content: any
}

const SinglePost: NextPage<SinglePostProps> = ({ frontmatter, content }) => {
  const router = useRouter()

  return (
    <Container>
      <h1>{frontmatter.title}</h1>
      <div className={styles['post__meta']}>
        <div className={styles['post__date']}>{frontmatter.date}</div>
        <div className={styles['post__tags']}>
          {frontmatter.tags.length > 0 &&
            frontmatter.tags.map((tag) => (
              <span key={`tag-${router.query.slug}-${tag}`} className={styles['post__tag']}>
                {tag}
              </span>
            ))}
        </div>
      </div>

      <div
        dangerouslySetInnerHTML={{
          __html: md().render(content),
        }}
      ></div>
    </Container>
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

export async function getStaticProps({ params: { slug } }: { params: { slug: string } }) {
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
