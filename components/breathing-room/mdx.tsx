import { AnchorHTMLAttributes, ClassAttributes, HTMLAttributes, JSX } from 'react'

import { type HTMLMotionProps, motion } from 'framer-motion'

// mdx-components.tsx
const mdxComponents = {
  h1: (
    props: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLHeadingElement> &
      HTMLAttributes<HTMLHeadingElement>
  ) => <h1 {...props} />,
  p: (props: HTMLMotionProps<'p'>) => (
    <motion.p
      {...props}
      className="min-h-screen"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
    />
  ),
  a: (
    props: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLAnchorElement> &
      AnchorHTMLAttributes<HTMLAnchorElement>
  ) => (
    <a
      {...props}
      className="text-primary relative underline decoration-1 underline-offset-4"
      target="_blank"
    />
  ),
}

export default mdxComponents
