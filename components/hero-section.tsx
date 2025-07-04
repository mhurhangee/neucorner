import Link from 'next/link'

import { Section } from './section'

export const HeroSection = () => {
  return (
    <Section id="home">
      <div>
        <h1>
          my corner <br /> of the web
        </h1>
        <p className="text-2xl font-light">by michael hurhangee</p>
        <p>
          <Link href="mailto:m.hurhangee@me.com" className="mr-4 lowercase">
            email
          </Link>
          <Link href="https://github.com/mhurhangee" className="lowercase">
            github
          </Link>
        </p>
      </div>
    </Section>
  )
}
