import { Header } from "@/components/header"
import { Container } from "@/components/container"
import { Main } from "@/components/main"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { PostsSection } from "@/components/posts-section"


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
