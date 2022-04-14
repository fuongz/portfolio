import type { NextPage } from 'next'
import { useTheme } from 'next-themes'
import Head from 'next/head'
import { Icon } from '@iconify/react'
import styles from '@/styles/Home.module.css'
import Image from 'next/image'

type Profile = {
  name: string
  avatar: string
  facebook: string
  github: string
  twitter: string
  email: string
}

const Home: NextPage = () => {
  const { theme, setTheme } = useTheme()
  const profile: Profile = {
    name: 'Phuong Phung',
    avatar: 'https://www.gravatar.com/avatar/a5f485272d3ff15711f33bcf4f4c839f?s=100',
    facebook: 'phungthephuong',
    github: 'fugon11',
    twitter: 'fugon11',
    email: 'phuongthephung@gmail.com',
  }

  return (
    <>
      <Head>
        <title>Phuong Phung - fugon11 - phuongphung.com</title>
      </Head>

      <main className="container mx-auto px-4 py-4 md:p-0 flex items-center justify-center md:h-screen">
        <div>
          <h1 className="text-3xl font-medium mb-4">
            Hi<span className={styles['anim-blink']}> _</span>
          </h1>
          <div className="prose-zinc prose dark:prose-dark">
            <h3 className="dark:text-white">I&#39;m {profile.name}</h3>
            <p>Từng ước mơ trở thành một game thủ khi còn nhỏ, rồi tới đam mê phần cứng máy tính. Tôi đã theo học ngành Công Nghệ Thông Tin tại HUBT - K19.</p>

            <p>
              Bắt đầu đi làm từ năm 2016. Sau 1 năm thực tập tại một công ty outsource, tôi đã dấn thân vào con đường làm sản phẩm. Và khi đó{' '}
              <a target="_blank" rel="noopener noreferrer" href="https://base.vn">
                Base.vn
              </a>{' '}
              là một dấu mốc quan trọng trong những năm đầu trong ngành của tôi.
            </p>

            <p>Là một người yêu công nghệ và muốn dùng ngôn ngữ lập trình để tạo ra tất cả mọi thứ mình muốn. Đích đến của tôi là trở thành open sourceror toàn thời gian.</p>

            <p>
              Ngoài code ra thì sở thích của tôi là cà phê và chụp ảnh, tôi thích sự chính xác đến từng <span className="font-bold italic">mg</span> khi pha chế ra một ly cà phê hay chi tiết đến từng{' '}
              <span className="font-bold italic">pixel</span> khi chụp một tấm ảnh.
            </p>

            <ul>
              <li>
                <p>
                  Liên lạc với tôi qua{' '}
                  <a href={`https://github.com/${profile.github}`} rel="noopener noreferrer" target="_blank">
                    GitHub{' '}
                  </a>
                  ,{' '}
                  <a href={`https://www.facebook.com/${profile.facebook}`} rel="noopener noreferrer" target="_blank">
                    Facebook{' '}
                  </a>
                  ,{' '}
                  <a href={`https://twitter.com/${profile.twitter}`} rel="noopener noreferrer" target="_blank">
                    Twitter{' '}
                  </a>
                </p>
              </li>
              <li>
                <p>
                  Hoặc gửi mail về:{' '}
                  <a href={`mailto:${profile.email}`} target="_blank" rel="noopener noreferrer">
                    {profile.email}
                  </a>
                </p>
              </li>
            </ul>
          </div>

          <span className="border-t border-zinc-200 w-36 h-1 block my-4 mx-auto dark:border-zinc-700" />
          <div className="flex items-center justify-center">
            <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
              {theme === 'dark' ? (
                <>
                  <Icon icon="cil:moon" />
                </>
              ) : (
                <>
                  <Icon icon="cil:sun" />
                </>
              )}
            </button>
          </div>
        </div>
      </main>
    </>
  )
}

export default Home
