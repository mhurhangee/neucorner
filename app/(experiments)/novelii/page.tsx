'use client';

import Link from 'next/link';
import { Container } from '@/components/layout-container';
import { Section } from '@/components/layout-section';

export default function JsonViewerDemo() {
  return (
    <Container>
      <Section id="novelii-hero">
        <h1>novelii</h1>
        <p>An AI text-editor.</p>
        <ul>
          <li>
            <Link href="/posts/novelii">post</Link>
          </li>
          <li>
            <Link href="https://github.com/mhurhangee/novelii">code</Link>
          </li>
        </ul>
      </Section>
    </Container>
  );
}
