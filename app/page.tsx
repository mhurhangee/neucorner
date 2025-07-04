import { allPosts } from "content-collections"
import { Header } from "@/components/header"
import { Container } from "@/components/container"
import { Main } from "@/components/main"
import { Section } from "@/components/section"
import Link from "next/link"

export default function Home() {
  return (
    <Container>
      <Header />
      <Main>
        <Section id="home">
          <div>
            <h1>my corner <br /> of the web</h1>
            <p className="flex items-center gap-2 pl-2">michael hurhangee •
              <Link href="mailto:m.hurhangee@me.com" className="lowercase">
                email
              </Link>
              •
              <Link href="https://github.com/mhurhangee" className="lowercase">
                github
              </Link>
            </p>
          </div>
        </Section>
        <Section id="about">
          <h2>about</h2>
          <ul>
            <li><Link href="https://www.linkedin.com/in/michael-hurhangee/">Patent Attorney (former)</Link></li>
            <li><Link href="https://doi.org/10.25560/73366">PhD & MSci in Chemistry</Link></li>
            <li><Link href="https://scholar.google.co.uk/scholar?hl=en&as_sdt=0%2C5&q=michael+hurhangee">10+ research papers</Link></li>
            <li><Link href="https://patents.google.com/patent/US11667650B2">1 granted patent</Link></li>
            <li><Link href="https://scholar.google.co.uk/scholar?hl=en&as_sdt=0%2C5&q=michael+hurhangee">2000+ citations</Link></li>
            <li><Link href="https://github.com/mhurhangee">AI Expert</Link></li>
            <li><Link href="https://github.com/mhurhangee">Full Stack Dev</Link></li>
            <li><Link href="#thoughts">Tech Enthusiast</Link></li>
            <li><Link href="#thoughts">Nature Lover</Link></li>
          </ul>
          <p>
            I love learning and making new things. <br /> This is my place to share them.
          </p>
        </Section>
        <Section id="thoughts">
          <h2>posts</h2>
          <ul>
            {allPosts.map((post) => (
              <li key={post._meta.path}>
                <a href={`/posts/${post._meta.path}`}>
                  <h3>{post.title}</h3>
                  <p>{post.summary}</p>
                </a>
              </li>
            ))}
          </ul>
        </Section>
      </Main>
    </Container>
  )
}
