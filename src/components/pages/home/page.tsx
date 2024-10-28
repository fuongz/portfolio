'use client'

import Image from 'next/image'
import styles from './style.module.css'
import { AnimatedGroup } from '@/components/core/Animation/animated-group'

interface Contact {
  [key: string]: string
}

interface HomePageRouteProps {}

const HomePageRoute: React.FC<HomePageRouteProps> = () => {
  const contacts: Contact = {
    twitter: 'fuong_z',
    facebook: 'phungthephuong',
    email: 'phuongthephung@gmail.com',
    github: 'fuongz',
  }

  return (
    <AnimatedGroup
      className={styles.wrapper}
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
      <h1 className="text-3xl font-semibold mb-6">
        Phuong Phung{' '}
        <span className="text-lg text-zinc-500 font-normal">(🇻🇳 fuongz)</span>
      </h1>

      <div>
        <h4 className="mb-2 font-semibold">About me</h4>
        <p className="dark:text-zinc-300 text-zinc-500">
          A software engineer who found his true passion in programming.
        </p>
      </div>

      <div>
        <h4 className="mt-4 mb-2 font-semibold">Now</h4>
        <p className="flex items-center gap-2 dark:text-zinc-300 text-zinc-500">
          - Working at{' '}
          <a
            href="https://hiip.asia/?rel=phuongphung.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 dark:bg-zinc-800 bg-zinc-100 dark:shadow rounded-md px-1.5 py-0.25 hover:underline transition hover:transition hover:dark:text-zinc-100 hover:text-zinc-800"
          >
            <Image
              className="inline"
              width={14}
              height={14}
              src="/images/hiip.webp"
              alt="Hiip Logo - Phuong Phung"
            />{' '}
            Hiip
          </a>
          .
        </p>
      </div>

      <div>
        <p className="mt-6 dark:text-zinc-300 text-zinc-500">
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
            X
          </a>
          .
        </p>
        <p className="mt-4 dark:text-zinc-300 text-zinc-500">
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
    </AnimatedGroup>
  )
}

export { HomePageRoute }
