'use client'

import { ThemeProvider } from 'next-themes'

interface ProvidersProps {
  children: React.ReactNode
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider attribute="class">
      <main className="md:mt-0 mt-16">{children}</main>
    </ThemeProvider>
  )
}
