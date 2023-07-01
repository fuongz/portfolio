import { NextPage } from 'next'
import Head from 'next/head'

interface HomeProps {
  data?: any
}

const Home: NextPage<HomeProps> = ({}) => {
  return (
    <>
      <Head>
        <title>Phương Phùng - fuongz - phuongphung.com</title>
        <meta property="og:title" content="Phương Phùng - fuongz - phuongphung.com" />
        <meta name="twitter:title" content="Phương Phùng - fuongz - phuongphung.com" />
        <link rel="canonical" href={process.env.NEXT_PUBLIC_ROOT_URL} />
      </Head>
    </>
  )
}

export default Home
