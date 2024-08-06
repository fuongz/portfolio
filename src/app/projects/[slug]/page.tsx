import { ProjectDetailPage } from '@/components/pages'
import { extractStringInsideSymbol } from '@/lib/string-helper'
import fetcher from '@/services/fetcher.service'
import { kv } from '@vercel/kv'

interface PageDetailRouteProps {
  params: { slug: string }
}

export default async function PageDetailRoute({
  params,
}: PageDetailRouteProps) {
  const { slug } = params
  let pageData: Array<Array<any>> | null = await kv.hget(
    `project_detail_cache:${slug}`,
    'data'
  )

  if (!pageData || typeof pageData === 'undefined') {
    console.log('⛔️ Cache missing!')
    pageData = await Promise.all([
      fetcher(`https://api.github.com/repos/fuongz/${slug}`),
      fetcher(`https://api.github.com/repos/fuongz/${slug}/languages`),
      fetcher(
        `https://api.github.com/repos/fuongz/${slug}/contents/README.md`
      ).catch(() => null),
      fetcher(
        `https://api.github.com/repos/fuongz/${slug}/commits?sha=main&per_page=1&page=1`,
        {
          responseHeaders: true,
        }
      ),
    ])
    await kv.hset(`project_detail_cache:${slug}`, { data: pageData })
    await kv.expire(`project_detail_cache:${slug}`, 3600)
  } else {
    console.log('✅ Cache HIT!')
  }

  const [info, languages, readme, commit] = pageData
  let totalCommits: number | null | string = 0
  if (commit) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_, commitHeaders] = commit
    const lastPageString = commitHeaders.link.split(',')[1]
    const lastPageStringUrl = extractStringInsideSymbol(
      lastPageString,
      '<',
      '>'
    )
    totalCommits = lastPageStringUrl
      ? new URL(lastPageStringUrl || '').searchParams.get('page')
      : 0
  }

  const totalFiles = Object.values(languages).reduce((a, b) => a + b, 0)

  return (
    <ProjectDetailPage
      info={info}
      languages={languages}
      totalFiles={totalFiles}
      totalCommits={totalCommits ? parseInt(totalCommits as string, 10) : 0}
      readme={readme}
    />
  )
}
