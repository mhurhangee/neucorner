import Link from 'next/link'

import { Box } from '@/components/ui/box'

import { Container } from '@/components/layout-container'
import { Section } from '@/components/layout-section'

export default function ExperimentsPage() {
  return (
    <Container>
      <Section id="experiments-hero">
        <h1>experiments</h1>
        <p className="ml-2">
          in <Link href="#experiments">AI</Link>, <Link href="#experiments">design</Link> and{' '}
          <Link href="#experiments">web development</Link>
        </p>
      </Section>
      <Section id="experiments">
        <h2>get hands-on</h2>
        <p>with some of my code.</p>
        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
          <Box
            href="/chat"
            category="AI"
            date="2025-07-05"
            title="Chat UI"
            summary="An AI-assistant for this site"
          />
        </div>
      </Section>
    </Container>
  )
}
