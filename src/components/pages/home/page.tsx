'use client'

import Image from 'next/image'
import styles from './style.module.css'

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
    <div className={styles.wrapper}>
      <h1 className="text-3xl font-semibold mb-6">
        Phuong Phung{' '}
        <span className="text-lg text-zinc-500 font-normal">(🇻🇳 fuongz)</span>
      </h1>

      <h4 className="mb-2 font-semibold">About me</h4>
      <p className="text-zinc-300">
        A software engineer who found his true passion in programming.
      </p>

      <h4 className="mt-4 mb-2 font-semibold">Now</h4>
      <p className="flex items-center gap-2 text-zinc-300">
        - Working at{' '}
        <a
          href="https://hiip.asia/?rel=phuongphung.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 bg-zinc-800 shadow rounded-md px-1.5 py-0.25 hover:underline transition hover:transition hover:text-zinc-100"
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

      <p className="mt-6 text-zinc-300">
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
      <p className="mt-4 text-zinc-300">
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
  )
}

export { HomePageRoute }
