import { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  lg?: boolean
}

const Container: React.FC<ContainerProps> = ({ children, lg }) => {
  return (
    <div
      className={`container max-w-xl md:my-24 mb-4 mx-auto px-4 py-4 xl:p-0 ${
        lg ? 'prose-lg' : ''
      }`}
    >
      {children}
    </div>
  )
}

export default Container
