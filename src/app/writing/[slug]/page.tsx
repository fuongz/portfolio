import { AnimatedGroup } from '@/components/core/Animation/animated-group'
import Container from '@/components/Shared/Container'
import { getArticle } from '@/lib/api'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

export default async function BlogPostPage({ params }: any) {
  const article = await getArticle(params.slug)
  return (
    <main>
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
          <h1 className="mt-40">{article.title}</h1>
          <article>{documentToReactComponents(article.content.json)}</article>
        </AnimatedGroup>
      </Container>
    </main>
  )
}
