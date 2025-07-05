import { AboutSection } from '@/components/about-section'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { PostsSection } from '@/components/posts-section'

export default function Home() {
  return (
    <Container>
      <Header />
      <HeroSection />
      <AboutSection />
      <PostsSection />
      <Footer />
    </Container>
  )
}
