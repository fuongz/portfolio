import type { NextPage } from 'next'
import { useTheme } from 'next-themes'
import Head from 'next/head'
import { Icon } from '@iconify/react'
import styles from '@/styles/Home.module.css'
import useSWR from 'swr'
import fetcher from '@/services/fetcher.service'
import { useMemo } from 'react'

type Project = {
  name: string
  description: string
  url: string
  extraLinks?: any
}

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

const Home: NextPage = ({ profile: profileData, data }: any) => {
  const profile: any = {
    twitter: 'fuong_z',
    facebook: 'phungthephuong',
    email: 'phuongthephung@gmail.com',
  }

  const sideProjects: Project[] = [
    {
      name: 'PhakeApp',
      description: 'Collection of software development tools',
      url: 'https://phake.app',
    },
    {
      name: 'Enma',
      description: 'Includes a lot of funny things for Her!',
      url: 'https://enma.uagizo.com',
    },
  ]

  const boilerplates = useMemo(() => {
    return data?.filter((repo: any) => repo.name.includes('-template')) || []
  }, [data])

  return (
    <>
      <Head>
        <title>Phương Phùng - fuongz - phuongphung.com</title>
        <meta property="og:title" content="Phương Phùng - fuongz - phuongphung.com" />
        <meta name="twitter:title" content="Phương Phùng - fuongz - phuongphung.com" />
        <link rel="canonical" href={process.env.NEXT_PUBLIC_ROOT_URL} />
      </Head>

      <main className="container my-8 mx-auto px-4 py-4 md:p-0 flex items-center justify-center">
        <div>
          <div className="prose-zinc prose dark:prose-dark">
            <h1 className="text-3xl font-medium mb-6">
              {profileData?.name} <span className="text-base text-zinc-400 font-normal italic">({profileData?.login})</span>
              <span className={styles['anim-blink']}> _</span>
            </h1>
            <blockquote>{profileData?.bio}</blockquote>
            <p>
              Hey, I&#39;m {profileData?.name}, a software engineer who found his true passion in programming. Working at{' '}
              <a href="https://hiip.asia/" target="_blank" rel="noopener noreferrer">
                Hiip
              </a>
              .
            </p>
            <p>
              Creator of{' '}
              <a href="https://phake.app" target="_blank" rel="noopener noreferrer">
                PhakeLabs
              </a>{' '}
              and{' '}
              <a href="#" target="_blank" rel="noopener noreferrer">
                UaGiZo.Com
              </a>{' '}
              (Ủa gì zợ!) .
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
              {boilerplates.map((project: any, index: number) => (
                <div key={`boilerplateProject-${index}`}>
                  <a href={project.html_url} target="_blank" rel="noopener noreferrer" className={styles['project__item']}>
                    {project.name}
                    <span className="text-zinc-500 text-sm block">{project.description}</span>
                  </a>

                  <div className="flex items-center flex-wrap gap-2">
                    <span className="text-xs text-zinc-400 italic rounded">Last updated: {formatDate(project.updated_at)}</span>
                  </div>
                </div>
              ))}
            </div>

            <p className="mb-0 mt-12">
              Find me on{' '}
              <a href={profileData?.html_url} rel="noopener noreferrer" target="_blank">
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
        </div>
      </main>
    </>
  )
}

export default Home

export const getStaticProps = async () => {
  const profile = await fetcher('https://api.github.com/users/fuongz')
  const data = await fetcher('https://api.github.com/orgs/phakelabs/repos')
  return {
    props: {
      profile,
      data: data.sort((a: any, b: any) => (a.updated_at > b.updated_at ? -1 : 1)),
    },
  }
}
