import { AnimatedGroup } from '@/components/core/Animation/animated-group'
import Container from '@/components/Shared/Container'
import { getArticle } from '@/lib/api'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

export default async function BlogPostPage({ params }: any) {
  const article = await getArticle(params.slug)
  return (
    <main>
      <Container prose lg>
        <AnimatedGroup>
          <h1 className="mt-40">{article.title}</h1>
          <article>{documentToReactComponents(article.content.json)}</article>
        </AnimatedGroup>
      </Container>
    </main>
  )
}
