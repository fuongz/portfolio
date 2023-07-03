import '../styles/globals.css'
import 'highlight.js/styles/github-dark.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import NextNProgress from 'nextjs-progressbar'
import Header from '@/components/Shared/Header'
import Head from 'next/head'
import { Analytics } from '@vercel/analytics/react'
import { DefaultSeo } from 'next-seo'
import SEOConfig from '../../next-seo.config'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <DefaultSeo {...SEOConfig} />
      </Head>
      <ThemeProvider enableSystem={true} attribute="class">
        <NextNProgress options={{ easing: 'ease', speed: 500 }} />
        <Header />
        <Component {...pageProps} />
        <Analytics />
      </ThemeProvider>
    </>
  )
}

export default MyApp
