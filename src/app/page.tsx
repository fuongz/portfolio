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
    <div className="container md:h-screen mx-auto mt-24 md:mt-0 px-4 py-4 md:p-0 flex items-center justify-center">
      <div className="prose dark:prose-invert">
        <h1 className="text-3xl font-semibold mb-6">
          Phuong Phung{' '}
          <span className="text-lg text-zinc-500 font-normal">(fuongz)</span>
        </h1>
        <p>
          A <span className="font-semibold">software engineer</span> who found
          his true passion in programming.
        </p>
        <p>
          I currently based in{' '}
          <span className="font-semibold">HCMC, Vietnam</span> 🇻🇳.
        </p>

        <ul>
          <li>
            Working at{' '}
            <a
              href="https://hiip.asia/?rel=phuongphung.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hiip
            </a>
            .
          </li>
        </ul>

        <p>
          Find me on{' '}
          <a
            href={`https://github.com/${contacts.github}?rel=phuongphung.com`}
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
            X{' '}
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
