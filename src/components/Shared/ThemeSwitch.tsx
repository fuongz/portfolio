'use client'

import { mc } from '@/lib/classname-helper'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { FiMonitor, FiMoon, FiSun } from 'react-icons/fi'

const ThemeIcons: { [key: string]: React.ReactNode } = {
  dark: <FiMoon />,
  light: <FiSun />,
  system: <FiMonitor />,
  default: <FiSun />,
}

interface ThemeSwitchButtonProps {
  theme: string
  active: boolean
  onClick: () => void
}
const ThemeSwitchButton = ({
  theme,
  active,
  onClick,
}: ThemeSwitchButtonProps) => {
  return (
    <span
      className={mc(
        ['text-zinc-900 rounded-full p-2 dark:text-zinc-200 cursor-pointer'],
        [active ? 'dark:bg-zinc-200 dark:text-zinc-900 bg-zinc-300' : '']
      )}
      onClick={() => onClick?.()}
    >
      {theme && ThemeIcons[theme] ? ThemeIcons[theme] : ThemeIcons.default}{' '}
    </span>
  )
}

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div
      className={mc(
        ['bg-zinc-100 gap-1 flex p-1 rounded-full'],
        ['dark:bg-zinc-700']
      )}
    >
      {ThemeIcons &&
        Object.keys(ThemeIcons)
          .filter((key) => key !== 'default')
          .map((key) => {
            return (
              <ThemeSwitchButton
                key={`theme-${key}`}
                theme={key}
                active={mounted && key === theme}
                onClick={() => (mounted ? setTheme(key) : null)}
              />
            )
          })}
    </div>
  )
}
