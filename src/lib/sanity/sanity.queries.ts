import { groq } from 'next-sanity'

const postFields = groq`
  _id,
  title,
  _updatedAt,
  publishedAt,
  mainImage,
  "slug": slug.current,
  body,
  categories[]->{
    _id,
    "slug": slug.current,
    title,
    description
  },
  "author": author->{name, slug, image, bio},
  overview
`

export const categoriesQuery = groq`
*[_type == "category"] | order(_updatedAt desc) {
  "slug": slug.current,
  title,
  _updatedAt
}
`

export const indexQuery = groq`
*[_type == "post"] | order(_updatedAt desc) {
  ${postFields}
}`

export const latestPostQuery = groq`
*[_type == "post" && "regex" in categories[]->slug.current] | order(_updatedAt desc) [0] {
  ${postFields}
}`

export const postByCategoryQuery = groq`
*[_type == "post" && $category in categories[]->slug.current] | order(_updatedAt desc) {
  ${postFields}
}`

export const sitemapQuery = groq`
{
  "posts": *[_type == "post"] | order(_updatedAt desc) {
    "slug": slug.current,
    publishedAt
  },
  "categories": *[_type == "category"] | order(_updatedAt desc) {
    "slug": slug.current,
    publishedAt
  }
}
`

export const postAndMoreStoriesQuery = groq`
{
  "post": *[_type == "post" && slug.current == $slug] | order(_updatedAt desc) [0] {
    content,
    ${postFields}
  },
  "morePosts": *[_type == "post" && slug.current != $slug] | order(_updatedAt desc) [0...2] {
    content,
    ${postFields}
  }
}`

export const postSlugsQuery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`

export const postBySlugQuery = groq`
*[_type == "post" && slug.current == $slug][0] {
  ${postFields}
}
`

export interface Author {
  name?: string
  picture?: any
}

export interface Post {
  _id: string
  title?: string
  coverImage?: any
  _updatedAt?: string
  publishedAt?: string
  author?: Author
  slug?: string
  body?: any
  overview?: string
}

export interface Category {
  _id: string
  slug?: string
  title?: string
  description?: string
  _updatedAt?: string
}
