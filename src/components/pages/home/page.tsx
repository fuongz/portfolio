'use client'

import { Container } from '@/components/Shared'
import { TextScramble } from '@/components/core/Animation/text-scramble'
import { Copyright } from '@/components/layout'
import { Button } from '@/components/ui'
import Image from 'next/image'
import Link from 'next/link'
import { IoIosLink } from 'react-icons/io'
import { PiFacebookLogo } from 'react-icons/pi'
import { VscGithubAlt, VscMail } from 'react-icons/vsc'
import { NewBadge } from './components/new-badge/new-badge'

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
      url: 'https://pet.phake.app/',
      description: 'Pet Identity Management system',
      thumbnailUrl: '/projects/pet-phake-app.png',
      title: 'Pet Identity Management',
      technologies: ['nextjs', 'supabase'],
    },
    {
      url: 'https://www.trinhvaphuong.com/',
      description: 'Our Wedding Invitation and Photo Gallery',
      thumbnailUrl: '/projects/trinhvaphuong-com.png',
      title: 'Our wedding',
      technologies: ['nextjs', 'cloudflare'],
    },
    {
      url: 'https://github.com/phake-studio/mcp-dichvucong',
      description:
        'MCP (Model Context Protocol) Server for Dịch Vụ Công - Việt Nam',
      title: 'DichVuCong - MCP Server',
      thumbnailUrl: '/projects/mcp-dichvucong.png',
      technologies: ['nodejs'],
    },
    {
      url: 'https://bieudovang.net/',
      description: 'Việt Nam gold/currencies price charts',
      title: 'BieuDoVang',
      technologies: ['nextjs', 'hono', 'cloudflare', 'sqlite'],
      thumbnailUrl: '/projects/bieudovang-com.png',
    },
    {
      url: 'https://mavel.phake.app/',
      description:
        'Mavel aka. "My Travel", a travel guide website about places to go in Việt Nam!',
      title: 'Mavel',
      technologies: ['nextjs', 'python', 'supabase'],
      thumbnailUrl: '/projects/mavel-phake-app.png',
    },
    {
      url: 'https://image.phake.app/',
      description: 'A simple image converter API.',
      title: 'Image-Proxy',
      technologies: ['python', 'docker'],
      thumbnailUrl: '/projects/image-proxy.png',
    },
  ]

  return (
    <Container>
      <h1 className="text-3xl mt-8 font-semibold mb-4 flex items-center gap-1">
        <TextScramble className="font-serif">Phuong Phung</TextScramble>{' '}
        <span className="text-lg font-serif ml-2 text-zinc-600 dark:text-zinc-400 font-normal">
          (🇻🇳 fuongz)
        </span>
      </h1>

      <div>
        <p className="dark:text-zinc-400 text-zinc-600">
          A software engineer who found his true passion in programming. I share
          insights through{' '}
          <a
            href="https://blog.phuongphung.com?ref=phuongphung.com"
            className="hover:transition transition underline"
          >
            my blog
          </a>
          .
        </p>
      </div>

      <div className="flex gap-2 mt-4">
        <Link
          href={`https://github.com/${contacts.github}?rel=phuongphung.com`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>
            <VscGithubAlt className="h-4 w-4 mr-2" />
            GitHub
          </Button>
        </Link>
        <Link
          href={`https://www.facebook.com/${contacts.facebook}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>
            <PiFacebookLogo className="h-4 w-4 mr-2" />
            Facebook
          </Button>
        </Link>
        <Link href={`mailto:${contacts.email}`}>
          <Button>
            <VscMail className="h-4 w-4 mr-2" />
            Email
          </Button>
        </Link>
      </div>

      <div className="mt-12">
        <div className="mb-2 text-zinc-900 dark:text-white font-bold text-lg font-serif flex gap-2 items-center">
          Projects
        </div>
        <div className="grid grid-cols-1">
          {projects.map((project, index: number) => (
            <Link
              href={`${project.url}?rel=phuongphung.com`}
              key={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:transition w-full duration-400 items-center text-lg flex gap-4 hover:duration-400 hover:scale-102 group transition p-4 hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer rounded-xl"
            >
              {project.thumbnailUrl && (
                <div className="rounded relative overflow-hidden w-[180px] h-[100px]">
                  <Image
                    src={project.thumbnailUrl}
                    width={180}
                    height={100}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
              )}
              <div className="flex flex-col w-full">
                <div className="mb-1 font-serif text-balance text-zinc-800 dark:text-white font-semibold flex gap-2 items-center">
                  {index === 0 && <NewBadge />}
                  {project.title}
                </div>
                <p className="dark:text-zinc-500 text-balance font-medium text-sm text-zinc-500">
                  {project.description}
                </p>
                <p className="mt-2 flex items-center gap-2 dark:text-zinc-500 text-balance font-medium text-sm text-zinc-400">
                  <IoIosLink className="h-4 w-4" />
                  {project.url}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Copyright />
    </Container>
  )
}

export { HomePageRoute }
