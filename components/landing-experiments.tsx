import Link from 'next/link'

import { Section } from './layout-section'
import { Box } from './ui/box'

export const Experiments = () => {
  return (
    <Section id="experiments">
      <h2>some experiments</h2>
      <p>
        to try and play with. The rest are <Link href="/experiments">here</Link>.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
        <Box
          href="#ai-experiments"
          category="AI"
          date="2025-07-05"
          title="A first thing"
          summary="Waiting for the next big thing. "
        />
        <Box
          href="#ai-experiments"
          category="AI"
          date="2025-07-05"
          title="Something else"
          summary="Holding my breath."
        />
        <Box
          href="#ai-experiments"
          category="AI"
          date="2025-07-05"
          title="Maybe nothing"
          summary="What's next?"
        />
      </div>
    </Section>
  )
}
