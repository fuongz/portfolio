import { HomePageRoute } from '@/components/pages/home'
import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'fuongz',
    description:
      'Personal website of Phuong Phung, topics: technology, slice of life.',
    keywords:
      'phuong phung, technology, tech blog, phuong phung portfolio, trang cá nhân phương phùng, phương phùng',
  }
}

export default async function HomePage() {
  return <HomePageRoute />
}
