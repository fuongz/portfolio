import styles from '@/styles/SharedComponents/Header.module.css'
import { Icon } from '@iconify/react'
import { useTheme } from 'next-themes'
import Link from 'next/link'

interface HeaderProps {
  data?: any
}

const Header: React.FC<HeaderProps> = ({}) => {
  const { theme, setTheme, systemTheme } = useTheme()

  return (
    <header className={styles['header']}>
      <div className={styles['header-menu']}>
        <Link href="/" className={styles['header-menu__item']}>
          Home
        </Link>

        <Link href="/posts" className={styles['header-menu__item']}>
          Blog
        </Link>
        <a href="https://github.com/fuongz" rel="noopener noreferrer" target="_blank" className={styles['header-menu__item']}>
          <Icon icon="mdi:github" width={20} height={20} />
        </a>
        <button onClick={() => setTheme(theme === 'dark' || (theme === 'system' && systemTheme === 'dark') ? 'light' : 'dark')} className={styles['header-menu__item']}>
          {theme === 'dark' || (theme === 'system' && systemTheme === 'dark') ? (
            <>
              <Icon icon="tabler:moon-filled" />
            </>
          ) : (
            <>
              <Icon icon="tabler:sun-filled" />
            </>
          )}
        </button>
      </div>
    </header>
  )
}

export default Header
