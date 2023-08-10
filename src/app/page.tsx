'use client'

interface Contact {
  [key: string]: string
}

export default function Page() {
  const contacts: Contact = {
    twitter: 'fuong_z',
    facebook: 'phungthephuong',
    email: 'phuongthephung@gmail.com',
    github: 'fuongz',
  }

  return (
    <div className="container h-screen mx-auto px-4 py-4 md:p-0 flex items-center justify-center">
      <div className="prose">
        <h1 className="text-3xl font-medium mb-6">
          Phuong Phung{' '}
          <span className="text-lg text-zinc-500 font-normal">(fuongz)</span>
        </h1>
        <p>
          Hey, I&#39;m a software engineer who found his true passion in
          programming.
        </p>
        <p>I currently live and work in Ho Chi Minh, Vietnam 🇻🇳.</p>
        <ul>
          <li>
            Working at{' '}
            <a
              href="https://hiip.asia/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hiip
            </a>
            .
          </li>
          <li>
            Creator of{' '}
            <a
              href="https://github.com/phakelabs"
              target="_blank"
              rel="noopener noreferrer"
            >
              PhakeLabs
            </a>
            .
          </li>
        </ul>

        <p>
          Find me on{' '}
          <a
            href={`https://github.com/${contacts.github}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub{' '}
          </a>
          ,{' '}
          <a
            href={`https://www.facebook.com/${contacts.facebook}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            Facebook{' '}
          </a>
          ,{' '}
          <a
            href={`https://twitter.com/${contacts.twitter}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            Twitter{' '}
          </a>
          .
        </p>
        <p className="mt-0">
          Mail me at{' '}
          <a
            href={`mailto:${contacts.email}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {contacts.email}
          </a>
          .
        </p>
        <p className="text-zinc-400 text-sm">2023 &copy; fuongz.</p>
      </div>
    </div>
  )
}
