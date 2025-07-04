import Link from 'next/link'

import { Section } from './section'

export const HeroSection = () => {
  return (
    <Section id="home">
      <div>
        <h1>
          my corner <br /> of the web
        </h1>
        <p className="flex items-center gap-2 pl-2">
          michael hurhangee •
          <Link href="mailto:m.hurhangee@me.com" className="lowercase">
            email
          </Link>
          •
          <Link href="https://github.com/mhurhangee" className="lowercase">
            github
          </Link>
        </p>
      </div>
    </Section>
  )
}
