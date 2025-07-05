import Link from 'next/link'

import { Section } from './section'

export const HeroSection = () => {
  return (
    <Section id="home">
      <h1 className="pt-0">
        my <br />web <br />corner <br />

      </h1>
      <p className="pb-8">
        <Link href="#about">about</Link>, <Link href="#posts">posts</Link> and{' '}
        <Link href="/experiments">experiments</Link>.
      </p>
    </Section>
  )
}
