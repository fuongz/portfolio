'use client'

import styles from '@/styles/SharedComponents/Header.module.css'
import Link from 'next/link'
import ThemeSwitch from './ThemeSwitch'
import AnimatedBackground from '../core/Animation/animated-background'
import { usePathname } from 'next/navigation'
import { IoIosHome, IoIosPaper, IoLogoGithub } from 'react-icons/io'

interface HeaderProps {
  data?: any
}

const Header: React.FC<HeaderProps> = ({}) => {
  const pathName = usePathname()
  const TABS: Array<{
    label: string
    value: string
    icon: React.ReactElement
    external?: boolean
    ariaLabel?: string
  }> = [
    {
      label: 'Home',
      value: '/',
      icon: <IoIosHome />,
    },
    {
      label: 'Notes',
      value: '/posts',
      icon: <IoIosPaper />,
    },
    {
      label: 'Github',
      value: 'https://github.com/fuongz',
      external: true,
      ariaLabel: 'Read more about Fuongz github',
      icon: <IoLogoGithub />,
    },
  ]
  return (
    <header className={styles['header']}>
      <AnimatedBackground
        defaultValue={TABS[0].value}
        className="rounded-lg bg-zinc-100 dark:bg-zinc-800"
        transition={{
          type: 'spring',
          bounce: 0.2,
          duration: 0.3,
        }}
        enableHover
      >
        {TABS.map((TAB) => (
          <Link
            key={TAB.value}
            className={`${styles['header-menu__item']} ${pathName === TAB.value ? styles['header-menu__item--is-active'] : ''}`}
            data-id={TAB.value}
            href={TAB.value}
            rel={TAB.external ? 'noopener noreferrer' : ''}
            target={TAB.external ? '_blank' : ''}
            aria-label={TAB.ariaLabel ? TAB.ariaLabel : ''}
          >
            <div className="flex gap-2 items-center">
              {TAB.icon}
              {TAB.label}
            </div>
          </Link>
        ))}
      </AnimatedBackground>
      <div className="ml-4">
        <ThemeSwitch />
      </div>
    </header>
  )
}

export default Header
