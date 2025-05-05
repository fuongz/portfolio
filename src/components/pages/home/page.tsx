'use client'

import styles from './style.module.css'
import { AnimatedGroup } from '@/components/core/Animation/animated-group'
import Container from '@/components/Shared/Container'
import { TextScramble } from '@/components/core/Animation/text-scramble'
import { IoMdImage, IoIosAnalytics, IoIosPin, IoIosHeart } from 'react-icons/io'
import { TbBrandOpenai } from 'react-icons/tb'
import { Copyright } from '@/components/layout'

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
      url: 'https://www.trinhvaphuong.com/',
      icon: <IoIosHeart />,
      description: 'My wedding website.',
      title: 'Trinh & Phương',
      technologies: ['js', 'cloudflare', 'vercel'],
    },
    {
      url: 'https://github.com/phake-studio/mcp-dichvucong',
      icon: <TbBrandOpenai />,
      description:
        'MCP (Model Context Protocol) Server for Dịch Vụ Công - Việt Nam!',
      title: 'Dịch Vụ Công - MCP Server',
      technologies: ['js'],
    },
    {
      url: 'https://bieudovang.net/',
      icon: <IoIosAnalytics />,
      description: 'Việt Nam gold/currencies price charts!',
      title: 'Biểu Đồ Vàng',
      technologies: ['nextjs', 'hono', 'cloudflare', 'vercel'],
    },
    {
      url: 'https://mavel.phake.app/',
      icon: <IoIosPin />,
      description:
        'Mavel aka. "My Travel", a travel guide website about places to go in Việt Nam!',
      title: 'Mavel',
      technologies: ['nextjs', 'python', 'supabase', 'vercel'],
    },
    {
      url: 'https://image.phake.app/',
      icon: <IoMdImage />,
      description: 'A simple image converter API.',
      title: 'Image-Proxy',
      technologies: ['python', 'docker'],
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

        <div>
          <div className="mb-4 font-semibold text-black dark:text-white">
            About me
          </div>
          <p className="dark:text-zinc-400 text-zinc-500">
            A software engineer who found his true passion in programming. I
            share insights through{' '}
            <a
              href="https://blog.phuongphung.com?ref=phuongphung.com"
              className="hover:transition transition underline"
            >
              my blog
            </a>
            .
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
                className="hover:transition group transition cursor-pointer not-last:border-b dark:border-zinc-800 border-zinc-100 pb-2"
              >
                <div className="mb-1 text-zinc-800 dark:text-zinc-200 group-hover:underline font-medium flex gap-2 items-center">
                  {project.icon}
                  {project.title}
                </div>
                <p className="dark:text-zinc-400 text-sm text-zinc-500">
                  {project.description}
                </p>
                <div className="flex gap-2 flex-wrap mt-2">
                  <span className="dark:text-zinc-500 text-zinc-400 text-sm font-mono">
                    {project.technologies.join(', ')}
                  </span>
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

        <Copyright />
      </AnimatedGroup>
    </Container>
  )
}

export { HomePageRoute }
