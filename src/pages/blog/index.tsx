import fs from 'fs'
import matter from 'gray-matter'

interface BlogPageProps {
  posts: any[]
}

const BlogPage: React.FC<BlogPageProps> = ({ posts }) => {
  console.log(posts)
  return <></>
}

export default BlogPage

export async function getStaticProps() {
  try {
    const files = fs.readdirSync('contents')
    const posts = files.map((fileName) => {
      const slug = fileName.replace('.md', '')
      const readFile = fs.readFileSync(`contents/${fileName}`, 'utf8')
      const { data: frontmatter } = matter(readFile)

      return {
        slug,
        frontmatter,
      }
    })
    return {
      props: {
        posts,
      },
    }
  } catch (err: any) {
    console.log(err)
    return { props: {} }
  }
}
