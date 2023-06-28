export type Post = {
  slug: string
  frontmatter: {
    date: string
    metaDesc: string
    metaTitle: string
    tags: string[]
    title: string
  }
}
