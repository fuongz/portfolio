import PostsPage from '@/components/pages/posts/PostsPage'
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

export const metadata: Metadata = {
  title: 'Posts - fuongz - phuongphung.com',
  description: 'All posts written by Phuong Phung.',
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
  return <PostsPage data={data} categories={categories} />
}
