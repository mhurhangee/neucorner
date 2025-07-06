import { About } from '@/components/landing-about'
import { Experiments } from '@/components/landing-experiments'
import { Hero } from '@/components/landing-hero'
import { Posts } from '@/components/landing-posts'
import { Container } from '@/components/layout-container'

export default function Home() {
  return (
    <Container>
      <Hero />
      <About />
      <Posts />
      <Experiments />
    </Container>
  )
}
