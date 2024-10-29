import Link from 'next/link'
import { useMemo } from 'react'
import { randomString } from 'lib/string-helper'
import { useSearchParams } from 'next/navigation'

interface TagProps {
  value: string | undefined
  count?: number
  hasActiveState?: boolean
}

const Tag: React.FC<TagProps> = ({ value, count, hasActiveState }) => {
  const randomId = randomString(10)
  const query = useSearchParams()
  const isActive = useMemo(() => {
    return !(!query.get('category') || value !== query.get('category'))
  }, [value, query])

  const href = useMemo(() => {
    if (!isActive) {
      return {
        pathname: '/posts',
        query: {
          category: value,
        },
      }
    } else {
      return {
        pathname: '/posts',
      }
    }
  }, [isActive, value])
  return (
    <Link
      key={`category-${randomId}-${value}`}
      className={`cursor-pointer hover:underline text-sm text-blue-400 px-2 py-0.5 rounded font-semibold ${
        isActive && hasActiveState && hasActiveState === true
          ? 'bg-blue-500 text-white dark:bg-blue-900 dark:text-white'
          : ''
      }`}
      href={href}
    >
      #{value} {!!count && <>({count})</>}
    </Link>
  )
}

export default Tag
