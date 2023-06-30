import '../styles/globals.css'
import 'highlight.js/styles/github-dark.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import NextNProgress from 'nextjs-progressbar'
import Header from '@/components/Shared/Header'
import Head from 'next/head'

interface SEOMeta {
  name?: string
  content: string
  property?: string
  key?: string
}

function MyApp({ Component, pageProps }: AppProps) {
  const meta: SEOMeta[] = [
    {
      name: 'description',
      content: "Phuong Phung's portfolio.",
      key: 'description',
    },
    {
      property: 'og:description',
      content: "Phuong Phung's portfolio.",
      key: 'og:description',
    },
    {
      property: 'og:type',
      content: 'website',
      key: 'og:type',
    },
    {
      property: 'og:image',
      content: process.env.NEXT_PUBLIC_ROOT_URL + '/og-default.png',
      key: 'og:image',
    },
    {
      property: 'og:image:alt',
      content: 'Banner for phuongphung.com',
      key: 'og:image:alt',
    },
    {
      property: 'og:image:width',
      content: '1280',
      key: 'og:image:width',
    },
    {
      property: 'og:image:height',
      content: '675',
      key: 'og:image:height',
    },
    {
      property: 'twitter:card',
      content: 'summary_large_image',
      key: 'twitter:card',
    },
    {
      property: 'twitter:creator',
      content: '@fuongzt',
      key: 'twitter:creator',
    },
    {
      property: 'twitter:description',
      content: "Phuong Phung's portfolio.",
      key: 'twitter:description',
    },
    {
      property: 'twitter:image',
      content: process.env.NEXT_PUBLIC_ROOT_URL + '/og-default.png',
      key: 'twitter:image',
    },
  ]

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        {meta.map(({ name, content, property, key }) => (
          <meta key={key} name={name} property={property} content={content} />
        ))}
      </Head>
      <ThemeProvider enableSystem={true} attribute="class">
        <NextNProgress options={{ easing: 'ease', speed: 500 }} />
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
