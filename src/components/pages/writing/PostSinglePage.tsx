'use client'

import highlightjs from 'markdown-it-highlightjs'
import md from 'markdown-it'
import Giscus from '@giscus/react'

import styles from '@/styles/Post/Post.module.css'
import 'highlight.js/styles/github-dark-dimmed.css'

import Container from '@/components/Shared/Container'
import { Post } from '@/lib/sanity/sanity.queries'
import Link from 'next/link'
import { useTheme } from 'next-themes'

export interface PostSinglePageProps {
  data: Post
}

export default function PostSinglePageComponent({ data }: PostSinglePageProps) {
  const { theme } = useTheme()

  return (
    <Container>
      <h1>{data.title}</h1>
      <div className={styles['post__meta']}>
        <div className={styles['post__date']}>
          {new Intl.DateTimeFormat('en-US').format(
            new Date(data.publishedAt as string)
          )}
        </div>
      </div>

      <div
        className={styles['post__body']}
        dangerouslySetInnerHTML={{
          __html: md()
            .use(highlightjs, { inline: true, styles })
            .render(data.body),
        }}
      />

      <div className="mb-4">
        <Giscus
          id="comments"
          repo="fuongz/portfolio"
          repoId="R_kgDOHLRfsw"
          category="Announcements"
          categoryId="DIC_kwDOHLRfs84CYtu9"
          mapping="specific"
          term="Welcome to phuongphung.com!"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="top"
          theme={theme === 'system' ? 'dark' : theme}
          lang="en"
          loading="lazy"
        />
      </div>

      <Link href="/posts" className={styles['post__go-back']}>
        {'<--'} Back to Posts
      </Link>
    </Container>
  )
}
