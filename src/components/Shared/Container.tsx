import { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="container my-8 mx-auto px-4 py-4 md:p-0 prose dark:prose-invert">{children}</div>
}

export default Container
