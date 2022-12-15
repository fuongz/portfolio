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

type Project = {
  name: string
  description: string
  url: string
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

  const sideProjects: Project[] = [
    {
      name: 'PhakeApp',
      description: 'Collection of software development tools',
      url: 'https://app.phake.dev',
    },
  ]

  const boilerplateProjects: Project[] = [
    {
      name: 'NextJs',
      description: 'NextJs Starter Template',
      url: 'https://nextjs.phake.dev',
    },
    {
      name: 'VueJS',
      description: 'Vite SSG + Vue3 + TypeScript + WindiCSS Starter Template',
      url: 'https://github.com/phakedev/vue-template',
    },
    {
      name: 'Flask',
      description: 'Python3 + Flask Starter Template',
      url: 'https://github.com/phakedev/flask-template',
    },
    {
      name: 'NestJS',
      description: 'NestJS + TypeORM + MySQL',
      url: 'https://github.com/phakedev/nestjs-mysql-typeorm-template',
    },
  ]

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
          <div className="prose-zinc prose dark:prose-dark">
            <h1 className="text-3xl font-medium mb-6">
              Phuong Phung<span className={styles['anim-blink']}> _</span>
            </h1>
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
                PhakeDev
              </a>
              .
            </p>

            <h2>List of my projects:</h2>

            <h3>Side projects</h3>

            <div className="grid grid-cols-2 gap-4">
              {sideProjects.map((project: Project, index: number) => (
                <a key={`sideProjects-${index}`} href={project.url} target="_blank" rel="noopener noreferrer" className={styles['project__item']}>
                  {project.name}
                  <span className="text-zinc-500 text-sm block">{project.description}</span>
                </a>
              ))}
            </div>

            <h3>Boilerplate projects</h3>
            <div className="grid grid-cols-2 gap-4">
              {boilerplateProjects.map((project: Project, index: number) => (
                <a key={`boilerplateProjects-${index}`} href={project.url} target="_blank" rel="noopener noreferrer" className={styles['project__item']}>
                  {project.name}
                  <span className="text-zinc-500 text-sm block">{project.description}</span>
                </a>
              ))}
            </div>

            <p className="mb-0 mt-12">
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
