import type { NextPage } from 'next'
import { useTheme } from 'next-themes'
import Head from 'next/head'
import { Icon } from '@iconify/react'
import styles from '@/styles/Home.module.css'

type Profile = {
  name: string
  facebook: string
  github: string
  twitter: string
  email: string
}

const Home: NextPage = () => {
  const { theme, setTheme } = useTheme()
  const profile: Profile = {
    name: 'Phuong Phung',
    facebook: 'phungthephuong',
    github: 'fuongz',
    twitter: 'fuongzt',
    email: 'phuongthephung@gmail.com',
  }

  return (
    <>
      <Head>
        <title>Phuong Phung - fugon11 - phuongphung.com</title>
        <meta property="og:title" content="Phuong Phung" />
        <meta name="twitter:title" content="Phuong Phung" />
        <link rel="canonical" href={process.env.NEXT_PUBLIC_ROOT_URL} />
      </Head>

      <main className="container mx-auto px-4 py-4 md:p-0 flex items-center justify-center md:h-screen">
        <div>
          <h1 className="text-3xl font-medium mb-4">
            Phuong Phung<span className={styles['anim-blink']}> _</span>
          </h1>
          <div className="prose-zinc prose dark:prose-dark">
            <p>
              Hey, I&#39;m {profile.name}, a software engineer who found his true passion in programming. Working at{' '}
              <a href="https://hiip.asia/" target="_blank" rel="noopener noreferrer">
                Hiip
              </a>
              .
            </p>

            <p>
              Creator of{' '}
              <a href="https://app.phake.dev" target="_blank" rel="noopener noreferrer">
                Phake Super Apps
              </a>
              .
            </p>

            <p className="mb-0">
              Find me on{' '}
              <a href={`https://github.com/${profile.github}`} rel="noopener noreferrer" target="_blank">
                GitHub{' '}
              </a>
              ,{' '}
              <a href={`https://www.facebook.com/${profile.facebook}`} rel="noopener noreferrer" target="_blank">
                Facebook{' '}
              </a>
              ,{' '}
              <a href={`https://twitter.com/${profile.twitter}`} rel="noopener noreferrer" target="_blank">
                Twitter{' '}
              </a>
              .
            </p>
            <p className="mt-0">
              Mail me at{' '}
              <a href={`mailto:${profile.email}`} target="_blank" rel="noopener noreferrer">
                {profile.email}
              </a>
              .
            </p>
          </div>

          <div className="mt-8 flex items-center justify-center">
            <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
              {theme === 'dark' ? (
                <>
                  <Icon icon="cil:moon" />
                </>
              ) : (
                <>
                  <Icon icon="cil:sun" />
                </>
              )}
            </button>
          </div>
        </div>
      </main>
    </>
  )
}

export default Home
