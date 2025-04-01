'use client'

import styles from './style.module.css'
import { AnimatedGroup } from '@/components/core/Animation/animated-group'
import Container from '@/components/Shared/Container'
import { TextScramble } from '@/components/core/Animation/text-scramble'
import { IoMdImage, IoIosHeart, IoIosAnalytics, IoIosPin } from 'react-icons/io'
import ThemeSwitch from '@/components/Shared/ThemeSwitch'

interface Contact {
  [key: string]: string
}

const HomePageRoute: React.FC = () => {
  const contacts: Contact = {
    facebook: 'phungthephuong',
    email: 'phuongthephung@gmail.com',
    github: 'fuongz',
  }

  const projects = [
    {
      url: 'https://bieudovang.net/',
      icon: <IoIosAnalytics />,
      description: 'Việt Nam gold/currencies price charts!',
      title: 'bieudovang',
      technologies: ['js', 'hono', 'cloudflare', 'vercel'],
    },
    {
      url: 'https://mavel.phake.app/',
      icon: <IoIosPin />,
      description:
        'Mavel aka. "My Travel", a travel guide website about places to go in Việt Nam!',
      title: 'mavel',
      technologies: ['js', 'python', 'supabase', 'vercel'],
    },
    {
      url: 'https://image.phake.app/',
      icon: <IoMdImage />,
      description: 'A simple image converter API.',
      title: 'image-proxy',
      technologies: ['python'],
    },
  ]

  return (
    <Container>
      <AnimatedGroup className={styles.wrapper}>
        <h1 className="text-3xl font-semibold mb-4 flex items-center gap-1">
          <TextScramble>Phuong Phung</TextScramble>{' '}
          <span className="text-lg text-zinc-600 dark:text-zinc-400 font-normal">
            (🇻🇳 fuongz)
          </span>
        </h1>

        <div className="flex mb-8">
          <ThemeSwitch />
        </div>

        <div>
          <div className="mb-2 font-semibold text-black dark:text-white">
            About me
          </div>
          <p className="dark:text-zinc-400 text-zinc-600">
            A software engineer who found his true passion in programming.
          </p>
        </div>

        <div className="mt-12">
          <div className="mb-4 font-semibold">Projects</div>
          <div className="flex flex-col gap-4">
            {projects.map((project) => (
              <a
                href={`${project.url}?rel=phuongphung.com`}
                key={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:transition group transition cursor-pointer"
              >
                <div className="mb-0.5 group-hover:underline font-medium">
                  {project.title}
                </div>
                <p className="dark:text-zinc-400 text-zinc-600">
                  {project.description}
                </p>
                <div className="flex gap-2 flex-wrap mt-1">
                  {project.technologies.map((tech) => (
                    <span
                      key={`${project.url}-${tech}`}
                      className="dark:text-zinc-500 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <div className="mb-4 font-semibold">Connect</div>
          <p className="mt-2 dark:text-zinc-400 text-zinc-600">
            Find me on{' '}
            <a
              href={`https://github.com/${contacts.github}?rel=phuongphung.com`}
              rel="noopener noreferrer"
              target="_blank"
              className="dark:text-white text-black font-mono font-medium hover:underline"
            >
              GitHub
            </a>
            ,{' '}
            <a
              href={`https://www.facebook.com/${contacts.facebook}`}
              rel="noopener noreferrer"
              target="_blank"
              className="dark:text-white text-black font-mono font-medium hover:underline"
            >
              Facebook
            </a>
            .
          </p>
          <p className="mt-2 dark:text-zinc-400 text-zinc-600">
            Mail me at{' '}
            <a
              href={`mailto:${contacts.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="dark:text-white text-black font-mono font-medium hover:underline"
            >
              {contacts.email}
            </a>
            .
          </p>
        </div>

        <div className="mt-12 flex flex-col items-start gap-4 justify-center pt-4">
          <p className="text-zinc-500 text-sm">
            Built with <IoIosHeart className="inline-block text-red-500" /> by
            fuongz.
          </p>
        </div>
      </AnimatedGroup>
    </Container>
  )
}

export { HomePageRoute }
