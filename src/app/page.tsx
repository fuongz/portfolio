import { getClient, getLatestPost } from '@/lib/sanity/sanity.client'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import Link from 'next/link'
dayjs.extend(relativeTime)

interface Contact {
  [key: string]: string
}

export default async function Page() {
  const contacts: Contact = {
    twitter: 'fuong_z',
    facebook: 'phungthephuong',
    email: 'phuongthephung@gmail.com',
    github: 'fuongz',
  }

  const client = getClient()
  const latestPost = await getLatestPost(client)

  let latestWatchEvents: any = null
  let latestPushEvents: any = null

  const githubEvents = await fetch(
    `https://api.github.com/users/${contacts.github}/events/public`
  ).then((res) => res.json())

  if (githubEvents) {
    githubEvents.forEach((event: any) => {
      if (event.type === 'WatchEvent' && !latestWatchEvents) {
        latestWatchEvents = event
      }

      if (event.type === 'PushEvent' && !latestPushEvents) {
        latestPushEvents = event
      }
    })
  }

  return (
    <div className="container md:h-screen mx-auto mt-24 md:mt-0 px-4 py-4 md:p-0 flex items-center justify-center">
      <div className="prose dark:prose-invert">
        <h1 className="text-3xl font-medium mb-6">
          Phuong Phung{' '}
          <span className="text-lg text-zinc-500 font-normal">(fuongz)</span>
        </h1>
        <p>
          Hey, I&#39;m a software engineer who found his true passion in
          programming.
        </p>
        <p>I currently live and work in Ho Chi Minh, Vietnam 🇻🇳.</p>

        <ul>
          <li>
            Working at{' '}
            <a
              href="https://hiip.asia/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hiip
            </a>
            .
          </li>
        </ul>

        <p className="font-bold">Latest changes:</p>

        {!!latestPost && (
          <>
            <p className="bg-zinc-100 dark:bg-zinc-800 px-4 py-2 rounded text-sm font-mono">
              {dayjs(latestPost?._updatedAt).fromNow()} ⎯ Published post{' '}
              <Link href={`/posts/${latestPost?.slug}`}>
                {latestPost?.title}
              </Link>{' '}
              →
            </p>
          </>
        )}

        {!!latestPushEvents && (
          <>
            <p className="bg-zinc-100 dark:bg-zinc-800 px-4 py-2 rounded text-sm font-mono">
              {dayjs(latestPushEvents?.created_at).fromNow()} ⎯{' '}
              <a
                href={`https://github.com/${latestPushEvents.repo.name}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {latestPushEvents?.payload.commits?.[0]?.message}
              </a>{' '}
              →
            </p>
          </>
        )}

        {!!latestWatchEvents && (
          <>
            <p className="bg-zinc-100 dark:bg-zinc-800 px-4 py-2 rounded text-sm font-mono">
              {dayjs(latestWatchEvents?.created_at).fromNow()} ⎯ Starred{' '}
              <a
                href={`https://github.com/${latestWatchEvents.repo.name}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {latestWatchEvents?.repo.name}
              </a>{' '}
              →
            </p>
          </>
        )}

        <p>
          Find me on{' '}
          <a
            href={`https://github.com/${contacts.github}`}
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
            href={`https://twitter.com/${contacts.twitter}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            Twitter{' '}
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
        <p className="text-zinc-400 text-sm">2023 &copy; fuongz.</p>
      </div>
    </div>
  )
}
