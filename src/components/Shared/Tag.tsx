import Link from 'next/link'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import { randomString } from 'utils/string-helper'

interface TagProps {
  value: string
  count?: number
  hasActiveState?: boolean
}

const Tag: React.FC<TagProps> = ({ value, count, hasActiveState }) => {
  const randomId = randomString(10)
  const router = useRouter()
  const isActive = useMemo(() => {
    return !(!router?.query?.tag || value !== router?.query?.tag)
  }, [value, router.query.tag])

  const href = useMemo(() => {
    if (!isActive) {
      return {
        pathname: '/posts',
        query: {
          tag: value,
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
      key={`tag-${randomId}-${value}`}
      className={`cursor-pointer hover:underline text-sm text-blue-400 px-2 py-0.5 rounded font-semibold ${
        isActive && hasActiveState && hasActiveState === true
          ? 'bg-blue-50 dark:bg-blue-900 dark:text-white'
          : ''
      }`}
      href={href}
    >
      {value} {!!count && <>({count})</>}
    </Link>
  )
}

export default Tag
