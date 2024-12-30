'use client'

import styles from './style.module.css'
import { AnimatedGroup } from '@/components/core/Animation/animated-group'
import Container from '@/components/Shared/Container'
import { TextScramble } from '@/components/core/Animation/text-scramble'
import { IoIosChatboxes, IoMdImage } from 'react-icons/io'

interface Contact {
  [key: string]: string
}

interface HomePageRouteProps {}

const HomePageRoute: React.FC<HomePageRouteProps> = () => {
  const contacts: Contact = {
    facebook: 'phungthephuong',
    email: 'phuongthephung@gmail.com',
    github: 'fuongz',
  }

  const projects = [
    {
      url: 'https://image.phake.app/',
      icon: <IoMdImage />,
      description: 'A simple image converter API.',
      title: 'image-proxy',
      languages: ['python'],
    },
    {
      url: 'https://chat.phake.app/',
      icon: <IoIosChatboxes />,
      description: 'A simple real-time chat build with Supabase.',
      title: 'maay-chat',
      languages: ['js'],
    },
  ]

  return (
    <Container>
      <AnimatedGroup className={styles.wrapper}>
        <h1 className="text-3xl font-semibold mb-6 flex items-center gap-1">
          <TextScramble>Phuong Phung</TextScramble>{' '}
          <span className="text-lg text-zinc-600 dark:text-zinc-400 font-normal">
            (🇻🇳 fuongz)
          </span>
        </h1>

        <div>
          <div className="mb-2 font-semibold">About me</div>
          <p className="dark:text-zinc-300 text-zinc-600">
            A software engineer who found his true passion in programming.
          </p>

          <p className="mt-2 dark:text-zinc-300 text-zinc-600">
            Find me on{' '}
            <a
              href={`https://github.com/${contacts.github}?rel=phuongphung.com`}
              rel="noopener noreferrer"
              target="_blank"
              className="border-b border-dash"
            >
              GitHub{' '}
            </a>
            ,{' '}
            <a
              href={`https://www.facebook.com/${contacts.facebook}`}
              rel="noopener noreferrer"
              target="_blank"
              className="border-b border-dash"
            >
              Facebook{' '}
            </a>
            .
          </p>
          <p className="mt-2 dark:text-zinc-300 text-zinc-600">
            Mail me at{' '}
            <a
              href={`mailto:${contacts.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-dash"
            >
              {contacts.email}
            </a>
            .
          </p>
        </div>

        <div>
          <div className="mt-6 mb-2 font-semibold">Projects</div>
          <div className="grid grid-cols-3 gap-4">
            {projects.map((project) => (
              <a
                href={`${project.url}?rel=phuongphung.com`}
                key={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md dark:hover:bg-zinc-800 hover:bg-zinc-100 hover:transition transition cursor-pointer px-4 py-2"
              >
                <div className="flex gap-4 items-center">
                  <div className="font-semibold flex gap-2 items-center">
                    {project.icon}
                    {project.title}
                  </div>
                  {project.languages.map((lang) => (
                    <span
                      key={`${project.url}-${lang}`}
                      className="dark:text-zinc-500 text-sm"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
                <p className="dark:text-zinc-400 text-sm">
                  {project.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </AnimatedGroup>
    </Container>
  )
}

export { HomePageRoute }
