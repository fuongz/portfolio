import { HomePageRoute } from '@/components/pages/home'
import { defineMetadata } from '@/lib/metadata-helper'
import fetcher from '@/services/fetcher.service'
import { kv } from '@vercel/kv'
import { Metadata } from 'next'

interface HomePageProps {}

export async function generateMetadata({}: HomePageProps): Promise<Metadata> {
  return defineMetadata({
    title: 'Phương Phùng - fuongz - phuongphung.com',
    description:
      'Personal website of Phuong Phung, topics: technology, slice of life. This index page is a categorized list of phuongphung.com pages.',
  })
}

export default async function HomePage({}: HomePageProps) {
  let pageData: Array<Array<any>> | null = await kv.hget(
    'homepage_cache',
    'data'
  )
  if (!pageData) {
    console.log('⛔️ Cache missing!')
    pageData = await Promise.all<[Array<any>]>([
      fetcher('https://api.github.com/users/fuongz/repos'),
    ])
    await kv.hset('homepage_cache', { data: pageData })
    await kv.expire('homepage_cache', 3600)
  } else {
    console.log('✅ Cache HIT!')
  }
  const [projects] = pageData
  return <HomePageRoute projects={projects} />
}
