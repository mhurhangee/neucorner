import Link from 'next/link'

import { Box } from '@/components/ui/box'

import { Section } from '@/components/layout-section'

import { EXPERIMENTS } from '@/lib/config/experiments'

export const Experiments = () => {
  return (
    <Section id="experiments">
      <h2>some experiments</h2>
      <p>
        to try and play with. The rest are <Link href="/experiments">here</Link>.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
        {EXPERIMENTS.map(experiment => (
          <Box
            key={experiment.title}
            href={experiment.href}
            category={experiment.category}
            date={experiment.date}
            title={experiment.title}
            summary={experiment.summary}
          />
        ))}
      </div>
    </Section>
  )
}
