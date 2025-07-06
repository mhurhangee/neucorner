import Link from 'next/link'

import { Container } from '@/components/layout-container'
import { Section } from '@/components/layout-section'

export default function ChatPage() {
  return (
    <Container>
      <Section id="chat-hero">
        <h1>Chat UI</h1>
        <p>It only seems fitting to make a chat UI for this site.</p>
        <p>
          See this <Link href="/posts/chat-ui">post</Link> for more details.
        </p>
      </Section>
      <Section id="chat">CHAT</Section>
    </Container>
  )
}
