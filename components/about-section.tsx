import Link from 'next/link'

import { Section } from './section'

export const AboutSection = () => {
  return (
    <Section id="about">
      <h2>about</h2>
      <ul>
        <li>
          <Link href="https://www.linkedin.com/in/michael-hurhangee/">
            former Patent Attorney
          </Link>
        </li>
        <li>
          <Link href="https://doi.org/10.25560/73366">PhD & MSci in Chemistry</Link>
        </li>
        <li>
          <Link href="https://scholar.google.co.uk/scholar?hl=en&as_sdt=0%2C5&q=michael+hurhangee">
            10+ research papers
          </Link>
        </li>
        <li>
          <Link href="https://patents.google.com/patent/US11667650B2">1 granted patent</Link>
        </li>
        <li>
          <Link href="https://scholar.google.co.uk/scholar?hl=en&as_sdt=0%2C5&q=michael+hurhangee">
            2000+ citations
          </Link>
        </li>
        <li>
          <Link href="https://github.com/mhurhangee">AI Expert</Link>
        </li>
        <li>
          <Link href="https://github.com/mhurhangee">Full Stack Dev</Link>
        </li>
        <li>
          <Link href="#thoughts">Tech Enthusiast</Link>
        </li>
        <li>
          <Link href="#thoughts">Nature Lover</Link>
        </li>
      </ul>
      <p>I love learning and making new things.</p>
      <p>This is my place to share them.</p>
    </Section>
  )
}
