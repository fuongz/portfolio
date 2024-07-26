import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

export const PROJECT_NAMES: Array<string> = process.env
  .NEXT_PUBLIC_PROJECT_NAMES
  ? JSON.parse(process.env.NEXT_PUBLIC_PROJECT_NAMES as string)
  : []

export const getTypeFromHomepage = (url: string) => {
  if (url.startsWith('https://chromewebstore.google.com')) {
    return 'chrome-extension'
  }
  if (url.startsWith('https://pypi.org')) {
    return 'pypi'
  }
  return null
}

export const transformInfo = (
  project: any
): {
  name: string
  stargazersCount: number
  lastCommit: string
  updatedAt: number
  description: string
  homepage: string
  language: string
  license: string
  htmlUrl: string
  type: string | null
} => ({
  name: project.name,
  stargazersCount: parseInt(project.stargazers_count, 10),
  lastCommit: dayjs(project.pushed_at).fromNow(),
  updatedAt: dayjs(project.pushed_at).unix(),
  description: project.description,
  homepage: project.homepage,
  language: project.language,
  license: project.license.spdx_id,
  htmlUrl: project.html_url,
  type: getTypeFromHomepage(project.homepage),
})
