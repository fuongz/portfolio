import { ReactElement, useMemo } from 'react'
import { FiChrome } from 'react-icons/fi'
import { IoLogoPython } from 'react-icons/io'
import { GoFileCode, GoLog, GoRepo, GoStar, GoStopwatch } from 'react-icons/go'

interface ProjectWebsiteProps {
  type: string | null
  url: string
}
const ProjectWebsite: React.FC<ProjectWebsiteProps> = ({ type, url }) => {
  const typeText = useMemo(() => {
    if (type === 'chrome-extension') {
      return 'Chrome Extension'
    }
    if (type === 'pypi') {
      return 'PyPI'
    }
    return null
  }, [type])
  const typeIcon = useMemo(() => {
    if (type === 'chrome-extension') {
      return <FiChrome />
    }
    if (type === 'pypi') {
      return <IoLogoPython />
    }
    return null
  }, [type])

  if (type === null) {
    return <></>
  }

  return (
    <a
      href={url}
      target="_blank"
      className="flex items-center gap-2 dark:bg-zinc-800 dark:border-zinc-700 border px-2 py-1 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-700 transition hover:transition"
    >
      {typeIcon}
      <span className="text-xs text-zinc-600 dark:text-zinc-200 font-medium">
        {typeText}
      </span>
    </a>
  )
}

interface ProjectCardProps {
  data: {
    name: string
    lastCommit: string
    description: string
    stargazersCount: number
    homepage: string
    language: string
    license: string
    htmlUrl: string
    type: string | null
  }
}
const ProjectCard: React.FC<ProjectCardProps> = ({ data }) => {
  const metadata: Array<{
    label: string
    field: keyof typeof data
    icon: ReactElement
  }> = [
    {
      label: 'Stars',
      field: 'stargazersCount',
      icon: <GoStar />,
    },
    {
      label: 'Last commit',
      field: 'lastCommit',
      icon: <GoStopwatch />,
    },
    {
      label: 'Language',
      field: 'language',
      icon: <GoFileCode />,
    },
    {
      label: 'License',
      field: 'license',
      icon: <GoLog />,
    },
  ]

  return (
    <div className="border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800/50 rounded-md p-4 border block">
      <div className="flex w-full items-center justify-between gap-x-3 gap-y-2">
        <GoRepo className="shrink-0" />
        <a
          href={`${data.htmlUrl}?ref=phuongphung.com`}
          target="_blank"
          className="grow hover:underline text-foreground font-bold tracking-tight text-pretty text-lg !leading-snug truncate"
        >
          {data.name}
        </a>
      </div>
      <p className="text-sm text-zinc-600 dark:text-zinc-400 my-4">
        {data.description}
      </p>
      <ul className="w-full text-xs mt-auto">
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
      </ul>

      {data.type !== null && (
        <div className="mt-4">
          <h3 className="text-xs font-semibold">Website</h3>
          <div className="flex items-center gap-2 mt-2">
            <ProjectWebsite url={data.homepage} type={data.type} />
          </div>
        </div>
      )}
    </div>
  )
}

export { ProjectCard }
