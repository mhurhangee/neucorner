import Link from 'next/link';
import { Section } from '@/components/layout-section';
import { Box } from '@/components/ui/box';

import { EXPERIMENTS } from '@/lib/config/experiments';

export const Experiments = () => {
  return (
    <Section id="experiments">
      <h2>some experiments</h2>
      <p>
        to try and play with. The rest are <Link href="/experiments">here</Link>
        .
      </p>

      <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
        {EXPERIMENTS.map((experiment) => (
          <Box
            category={experiment.category}
            date={experiment.date}
            href={experiment.href}
            key={experiment.title}
            summary={experiment.summary}
            title={experiment.title}
          />
        ))}
      </div>
    </Section>
  );
};
