import Link from 'next/link'

import { appConfig } from '@/lib/config/app'

export const Footer = () => {
  return (
    <footer className="border-border border-t-2">
      <div className="mx-auto max-w-7xl px-6 py-6">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:gap-0">
          <p>
            <Link href="/">{appConfig.appName}</Link>
          </p>
          <p className="flex items-center gap-2 text-left">
            by michael hurhangee •
            <Link href="mailto:m.hurhangee@me.com" className="lowercase">
              email
            </Link>
            •
            <Link href="https://github.com/mhurhangee" className="lowercase">
              github
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
