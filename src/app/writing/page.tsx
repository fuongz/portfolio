import { AnimatedGroup } from '@/components/core/Animation/animated-group'
import Container from '@/components/Shared/Container'
import { getAllArticles } from '@/lib/api'
import Link from 'next/link'

export default async function BlogPage() {
  const articles = await getAllArticles()

  return (
    <Container prose lg>
      <AnimatedGroup
        variants={{
          container: {
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.05,
              },
            },
          },
          item: {
            hidden: { opacity: 0, y: 40, filter: 'blur(4px)' },
            visible: {
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
              transition: {
                duration: 1,
                type: 'spring',
                bounce: 0.3,
              },
            },
          },
        }}
      >
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
