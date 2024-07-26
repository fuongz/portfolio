'use client'

import Link from 'next/link'
import {
  GoArrowLeft,
  GoDotFill,
  GoGitCommit,
  GoLog,
  GoStar,
  GoStopwatch,
} from 'react-icons/go'
import highlightjs from 'markdown-it-highlightjs'
import md from 'markdown-it'

import 'highlight.js/styles/github-dark-dimmed.css'
import markdownStyles from '@/styles/SharedComponents/Markdown.module.css'
import { transformInfo } from '@/lib/project-helper'
import { useMemo } from 'react'
import { LANGUAGE_COLORS } from '@/lib/language-helper'
import { number_format } from '@/lib/number-helper'

const fromBinary = (encoded: string) =>
  decodeURIComponent(escape(atob(encoded)))

interface ProjectDetailPageProps {
  info: any
  languages: any
  totalFiles: number
  totalCommits: number
  readme: any
}

const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({
  info,
  languages,
  totalFiles,
  totalCommits,
  readme,
}) => {
  const data = useMemo(() => transformInfo(info), [info])
  const metadata: Array<{
    label: string
    field: keyof typeof data
    icon: React.ReactElement
  }> = [
    {
      label: 'Stars',
      field: 'stargazersCount',
      icon: <GoStar className="shrink-0" />,
    },
    {
      label: 'Last commit',
      field: 'lastCommit',
      icon: <GoStopwatch className="shrink-0" />,
    },
    {
      label: 'License',
      field: 'license',
      icon: <GoLog className="shrink-0" />,
    },
  ]

  return (
    <div className="container max-w-4xl mx-auto mt-24 mb-8 px-4 py-4 lg:p-0">
      <div>
        <Link
          href="/"
          className="flex items-center gap-2 font-medium dark:text-zinc-400 text-zinc-600 mb-4 hover:text-zinc-900 hover:underline"
        >
          <GoArrowLeft />
          back
        </Link>
        <div className="md:grid md:grid-cols-12 gap-6">
          <div className="mb-8 md:mb-0 md:col-span-4 md:order-2">
            <div className="sticky top-16 border dark:border-zinc-800 dark:bg-zinc-900 border-zinc-200 rounded-lg p-4">
              <h3 className="dark:text-zinc-100 text-zinc-600 font-semibold mb-2">
                Project details
              </h3>

              <ul className="w-full text-sm mt-auto">
                {metadata &&
                  metadata.map((metadataItem) => (
                    <li
                      key={metadataItem.field}
                      className="flex min-w-0 items-center gap-3 py-1"
                    >
                      <p className="flex items-center text-zinc-600 dark:text-zinc-400 gap-1.5 truncate text-secondary">
                        {metadataItem.icon} {metadataItem.label}
                      </p>
                      <span className="h-px grow bg-current opacity-15"></span>
                      <span className="shrink-0 font-medium">
                        {data[metadataItem.field]}
                      </span>
                    </li>
                  ))}
                <li className="flex min-w-0 items-center gap-3 py-1">
                  <p className="flex items-center text-zinc-600 dark:text-zinc-400 gap-1.5 truncate text-secondary">
                    <GoGitCommit /> Commits
                  </p>
                  <span className="h-px grow bg-current opacity-15"></span>
                  <span className="shrink-0 font-medium">{totalCommits}</span>
                </li>
              </ul>

              <div className="mt-4">
                <h3 className="dark:text-zinc-100 text-zinc-600 font-semibold mb-2">
                  Written in:
                </h3>
                <ul>
                  {languages &&
                    Object.keys(languages).map((langKey) => (
                      <li
                        key={langKey}
                        className="flex gap-1 text-sm items-center dark:text-zinc-400 text-zinc-600 mb-2"
                      >
                        <GoDotFill
                          className="text-lg shrink-0"
                          style={{ color: LANGUAGE_COLORS[langKey] }}
                        />{' '}
                        <span className="flex gap-2">
                          <span>{langKey}</span>{' '}
                          <span className="text-zinc-400 dark:text-zinc-600">
                            (
                            {number_format(languages[langKey] / totalFiles, {
                              style: 'percent',
                              digits: 1,
                            })}
                            )
                          </span>
                        </span>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="col-span-8 md:order-1">
            <div
              className={`prose dark:prose-invert ${markdownStyles.wrapper}`}
              dangerouslySetInnerHTML={{
                __html: md()
                  .use(highlightjs, { inline: true, styles: markdownStyles })
                  .render(fromBinary(readme.content)),
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export { ProjectDetailPage }
