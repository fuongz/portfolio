import { apiVersion, dataset, projectId, useCdn } from './sanity.api'
import {
  indexQuery,
  type Post,
  postAndMoreStoriesQuery,
  postBySlugQuery,
  postSlugsQuery,
  Category,
  categoriesQuery,
  postByCategoryQuery,
  latestPostQuery,
} from './sanity.queries'
import { createClient, type SanityClient } from 'next-sanity'

export function getClient(preview?: { token: string }): SanityClient {
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn,
    perspective: 'published',
  })
  if (preview) {
    if (!preview.token) {
      throw new Error('You must provide a token to preview drafts')
    }
    return client.withConfig({
      token: preview.token,
      useCdn: false,
      ignoreBrowserTokenWarning: true,
      perspective: 'previewDrafts',
    })
  }
  return client
}

export const getSanityImageConfig = () => getClient()

// Functions
export async function getAllCategories(
  client: SanityClient
): Promise<Category[]> {
  return (await client.fetch(categoriesQuery)) || []
}

export async function getLatestPost(client: SanityClient): Promise<Post> {
  return (await client.fetch(latestPostQuery)) || null
}

export async function getAllPosts(
  client: SanityClient,
  category: string | null = null
): Promise<Post[]> {
  if (category) {
    return (await client.fetch(postByCategoryQuery, { category })) || []
  }
  return (await client.fetch(indexQuery)) || []
}

export async function getAllPostsSlugs(): Promise<Pick<Post, 'slug'>[]> {
  const client = getClient()
  const slugs = (await client.fetch<string[]>(postSlugsQuery)) || []
  return slugs.map((slug) => ({ slug }))
}

export async function getPostBySlug(
  client: SanityClient,
  slug: string
): Promise<Post> {
  return (await client.fetch(postBySlugQuery, { slug })) || ({} as any)
}

export async function getPostAndMoreStories(
  client: SanityClient,
  slug: string
): Promise<{ post: Post; morePosts: Post[] }> {
  return await client.fetch(postAndMoreStoriesQuery, { slug })
}
