export type PostFrontmatter = {
  date: string
  metaDesc: string
  metaTitle: string
  tags: string[]
  title: string
}

export type Post = {
  slug: string
  frontmatter: PostFrontmatter
}
