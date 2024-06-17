import WritingPage from '@/components/pages/writing/WritingPage'
import { defineMetadata } from '@/lib/metadata-helper'
import {
  getAllCategories,
  getAllPosts,
  getClient,
} from '@/lib/sanity/sanity.client'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

interface PostsIndexRouteProps {
  searchParams: {
    [key: string]: string
  }
}

export async function generateMetadata({
  searchParams,
}: PostsIndexRouteProps): Promise<Metadata> {
  let title: string = 'Posts - phuongphung.com'
  let description: string = 'All posts written by Phuong Phung.'
  if (searchParams && searchParams.category) {
    title = `${searchParams.category} - phuongphung.com`
    description = `All posts about ${searchParams.category} written by Phuong Phung.`
  }

  return defineMetadata({
    title,
    description,
  })
}

export default async function PostsIndexRoute({
  searchParams,
}: PostsIndexRouteProps) {
  const currentCategory: string = searchParams.category
  const client = getClient()
  const data = await getAllPosts(client, currentCategory)
  const categories = await getAllCategories(client)
  if (!data) {
    notFound()
  }
  return <WritingPage data={data} categories={categories} />
}
