import { HomePageRoute } from '@/components/pages/home'
import { defineMetadata } from '@/lib/metadata-helper'
import { Metadata } from 'next'

interface HomePageProps {}

export async function generateMetadata({}: HomePageProps): Promise<Metadata> {
  return defineMetadata({
    title: 'fuongz',
    description:
      'Personal website of Phuong Phung, topics: technology, slice of life.',
    keywords: 'phuong phung, technology, tech blog',
  })
}

export default async function HomePage({}: HomePageProps) {
  return <HomePageRoute />
}
