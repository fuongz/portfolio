'use client'

import highlightjs from 'markdown-it-highlightjs'
import md from 'markdown-it'

import styles from '@/styles/Post/Post.module.css'
import 'highlight.js/styles/atom-one-dark.css'

import Container from '@/components/Shared/Container'
import { Post } from '@/lib/sanity/sanity.queries'
import Link from 'next/link'

export interface PostSinglePageProps {
  data: Post
}

export default function PostSinglePageComponent({ data }: PostSinglePageProps) {
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
          __html: md().use(highlightjs, { inline: true }).render(data.body),
        }}
      />

      <Link href="/posts" className={styles['post__go-back']}>
        {'<--'} Back to Posts
      </Link>
    </Container>
  )
}
