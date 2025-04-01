import { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  prose?: boolean
  lg?: boolean
}

const Container: React.FC<ContainerProps> = ({ children, prose, lg }) => {
  return (
    <div
      className={`container max-w-xl md:my-24 mb-4 mx-auto px-4 py-4 xl:p-0 ${prose ? 'prose dark:prose-invert' : ''} ${lg ? 'prose-lg' : ''}`}
    >
      {children}
    </div>
  )
}

export default Container
