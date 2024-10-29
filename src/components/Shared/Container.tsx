import { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  isProse?: boolean
}

const Container: React.FC<ContainerProps> = ({ children, isProse }) => {
  return (
    <div
      className={`container max-w-5xl md:my-24 mb-4 mx-auto px-4 py-4 xl:p-0 ${isProse ? 'prose dark:prose-invert' : ''}`}
    >
      {children}
    </div>
  )
}

export default Container
