import fs from 'fs'

export const getAllPosts = (): string[] => {
  const files = fs.readdirSync('contents')
  const paths = files.map((fileName) => fileName.replace('.mdx', ''))
  return paths
}
