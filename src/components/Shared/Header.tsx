import styles from '@/styles/SharedComponents/Header.module.css'
import Link from 'next/link'
import ThemeSwitch from './ThemeSwitch'

interface HeaderProps {
  data?: any
}

const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <header className={styles['header']}>
      <div className={styles['header-menu']}>
        <Link href="/" className={styles['header-menu__item']}>
          Home
        </Link>

        <Link href="/posts" className={styles['header-menu__item']}>
          Posts
        </Link>
        <a
          href="https://github.com/fuongz"
          rel="noopener noreferrer"
          target="_blank"
          className={styles['header-menu__item']}
          aria-label="Read more about Fuongz github"
        >
          Github
        </a>

        <ThemeSwitch />
      </div>
    </header>
  )
}

export default Header
