import { AnimatedGroup } from '@/components/core/Animation/animated-group'
import Container from '@/components/Shared/Container'
import { getAllArticles } from '@/lib/api'
import Link from 'next/link'

export default async function BlogPage() {
  const articles = await getAllArticles()

  return (
    <Container prose lg>
      <AnimatedGroup>
        <h1>Writing</h1>

        {articles &&
          articles.length > 0 &&
          articles.map((article: any) => (
            <Link
              key={article.id}
              href={{
                pathname: `/writing/${article.slug}`,
              }}
            >
              {article.title}
            </Link>
          ))}
      </AnimatedGroup>
    </Container>
  )
}
