'use client'

import Link from 'next/link'

import { Container } from '@/components/layout-container'
import { Header } from '@/components/layout-header'
import { Section } from '@/components/layout-section'

export default function GlobalError() {
  return (
    <Container>
      <Header />
      <Section id="home">
        <h1>
          Something <br />
          went wrong <br />
        </h1>
        <p className="pb-8">
          try <Link href="/">home</Link>, <Link href="/#about">about</Link>,{' '}
          <Link href="/posts">posts</Link> or <Link href="/experiments">experiments</Link>.
        </p>
      </Section>
    </Container>
  )
}
