import Link from 'next/link'

import { Section } from './layout-section'

export const Hero = () => {
  return (
    <Section id="home">
      <h1 className="pt-0">
        my <br />
        corner <br />
        of the web
      </h1>
      <p className="pb-8">
        {' '}
        for <Link href="/posts">posts</Link>, <Link href="/experiments">experiments</Link> and a bit{' '}
        <Link href="/about">about me</Link>.
      </p>
    </Section>
  )
}
