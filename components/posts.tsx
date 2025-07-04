import { MDXContent } from '@content-collections/mdx/react'

import Link from 'next/link'

import { type Post as PostType } from 'content-collections'

import { Section } from './section'

export const Post = ({ post }: { post: PostType }) => {
  return (
    <>
      <Section id={post.title}>
        <h1 className="pb-0">{post.title}</h1>
        <div className="border-border border-b">
          <p className="text-lg font-light md:text-xl">
            by <Link href="/#about">me</Link> on{' '}
            {new Date(post.date).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            })}
          </p>
        </div>
        <div className="border-border border-b">
          <p className="text-xl font-bold md:text-3xl">{post.summary}</p>
        </div>
        <MDXContent code={post.mdx || ''} />
      </Section>
      <section className="container mx-auto h-24">
        <div className="flex items-center justify-between pt-8 pb-8">
          {post.prev ? (
            <span className="text-sm font-medium">
              <Link href={post.prev}>prev</Link>
            </span>
          ) : (
            <div className="w-16" />
          )}
          <span className="text-sm font-medium">
            <Link href="/#posts">all posts</Link>
          </span>
          {post.next ? (
            <span className="text-sm font-medium">
              <Link href={post.next}>next</Link>
            </span>
          ) : (
            <div className="w-16" />
          )}
        </div>
      </section>
    </>
  )
}
