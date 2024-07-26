'use client'

import { ProjectCard } from '@/components/Shared/ProjectCard'
import { useMemo } from 'react'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

const projectNames: Array<string> = process.env.NEXT_PUBLIC_PROJECT_NAMES
  ? JSON.parse(process.env.NEXT_PUBLIC_PROJECT_NAMES as string)
  : []
interface Contact {
  [key: string]: string
}

interface HomePageRouteProps {
  projects: any
}

const HomePageRoute: React.FC<HomePageRouteProps> = ({ projects }) => {
  const contacts: Contact = {
    twitter: 'fuong_z',
    facebook: 'phungthephuong',
    email: 'phuongthephung@gmail.com',
    github: 'fuongz',
  }

  function getTypeFromHomepage(url: string) {
    if (url.startsWith('https://chromewebstore.google.com')) {
      return 'chrome-extension'
    }
    if (url.startsWith('https://pypi.org')) {
      return 'pypi'
    }
    return null
  }

  const listProjects = useMemo(() => {
    if (projects && Array.isArray(projects)) {
      return projectNames
        .map((name: string) => {
          const foundRepo = projects.find(
            (e: { name: string; update_at: string; description: string }) =>
              e.name === name
          )
          return {
            name,
            stargazersCount: parseInt(foundRepo.stargazers_count, 10),
            lastCommit: dayjs(foundRepo.pushed_at).fromNow(),
            updatedAt: dayjs(foundRepo.pushed_at).unix(),
            description: foundRepo.description,
            homepage: foundRepo.homepage,
            language: foundRepo.language,
            license: foundRepo.license.spdx_id,
            htmlUrl: foundRepo.html_url,
            type: getTypeFromHomepage(foundRepo.homepage),
          }
        })
        .sort((a, b) => b.updatedAt - a.updatedAt)
    }
  }, [projects])

  return (
    <div className="container max-w-2xl mx-auto mt-24 mb-8 px-4 py-4 md:p-0">
      <div>
        <div className="prose dark:prose-invert">
          <h1 className="text-3xl font-semibold mb-6">
            Phuong Phung{' '}
            <span className="text-lg text-zinc-500 font-normal">(fuongz)</span>
          </h1>
          <p>
            A <span className="font-semibold">software engineer</span> who found
            his true passion in programming.
          </p>
          <p>
            I currently based in{' '}
            <span className="font-semibold">HCMC, Vietnam</span> 🇻🇳.
          </p>

          <ul>
            <li>
              Working at{' '}
              <a
                href="https://hiip.asia/?rel=phuongphung.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hiip
              </a>
              .
            </li>
          </ul>

          <p>
            Find me on{' '}
            <a
              href={`https://github.com/${contacts.github}?rel=phuongphung.com`}
              rel="noopener noreferrer"
              target="_blank"
            >
              GitHub{' '}
            </a>
            ,{' '}
            <a
              href={`https://www.facebook.com/${contacts.facebook}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              Facebook{' '}
            </a>
            ,{' '}
            <a
              href={`https://x.com/${contacts.twitter}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              X{' '}
            </a>
            .
          </p>
          <p className="mt-0">
            Mail me at{' '}
            <a
              href={`mailto:${contacts.email}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {contacts.email}
            </a>
            .
          </p>
        </div>

        {listProjects && listProjects.length > 0 && (
          <div className="mt-8">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Projects</h3>
              <p className="mt-2 text-xs text-zinc-400 text-right">
                Inspired by{' '}
                <a
                  href="https://openalternative.co?ref=phuongphung.com"
                  target="_blank"
                  className="text-zinc-700 dark:text-zinc-100 font-semibold"
                >
                  OpenAlternative.co
                </a>
              </p>
            </div>
            <div className="my-4 grid md:grid-cols-2 gap-4">
              {listProjects.map((project) => (
                <ProjectCard key={project.name} data={project} />
              ))}
            </div>
          </div>
        )}

        <p className="text-zinc-400 text-sm mt-4">2023 &copy; fuongz.</p>
      </div>
    </div>
  )
}

export { HomePageRoute }
