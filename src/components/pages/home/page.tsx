'use client'

import { Container } from '@/components/Shared'
import { TextScramble } from '@/components/core/Animation/text-scramble'
import { Copyright } from '@/components/layout'
import { Button } from '@/components/ui'
import Link from 'next/link'
import { PiFacebookLogo } from 'react-icons/pi'
import { VscGithubAlt, VscMail } from 'react-icons/vsc'

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
      description: 'My wedding website.',
      title: 'Trinh & Phương',
      technologies: ['nextjs', 'cloudflare', 'vercel'],
    },
    {
      url: 'https://github.com/phake-studio/mcp-dichvucong',
      description:
        'MCP (Model Context Protocol) Server for Dịch Vụ Công - Việt Nam!',
      title: 'Dịch Vụ Công - MCP Server',
      technologies: ['nodejs'],
    },
    {
      url: 'https://bieudovang.net/',
      description: 'Việt Nam gold/currencies price charts!',
      title: 'Biểu Đồ Vàng',
      technologies: ['nextjs', 'hono', 'cloudflare', 'vercel', 'sqlite'],
    },
    {
      url: 'https://mavel.phake.app/',
      description:
        'Mavel aka. "My Travel", a travel guide website about places to go in Việt Nam!',
      title: 'Mavel',
      technologies: ['nextjs', 'python', 'supabase', 'vercel'],
    },
    {
      url: 'https://image.phake.app/',
      description: 'A simple image converter API.',
      title: 'Image-Proxy',
      technologies: ['python', 'docker'],
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
        <p className="dark:text-zinc-400 text-zinc-800">
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
          {projects.map((project) => (
            <a
              href={`${project.url}?rel=phuongphung.com`}
              key={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:transition duration-400 hover:duration-400 hover:scale-102 group transition p-4 hover:bg-zinc-50 dark:hover:bg-zinc-800 cursor-pointer rounded-md"
            >
              <div className="mb-1 font-serif text-zinc-900 dark:text-white font-semibold flex gap-2 items-center">
                {project.title}
              </div>
              <p className="dark:text-zinc-500 font-medium text-sm text-zinc-500">
                {project.description}
              </p>
            </a>
          ))}
        </div>
      </div>
      <Copyright />
    </Container>
  )
}

export { HomePageRoute }
