import { AboutSection } from '@/components/about-section'
import { Container } from '@/components/container'
import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { Main } from '@/components/main'
import { PostsSection } from '@/components/posts-section'

export default function Home() {
  return (
    <Container>
      <Header />
      <Main>
        <HeroSection />
        <AboutSection />
        <PostsSection />
      </Main>
    </Container>
  )
}
