import { MDXContent } from '@content-collections/mdx/react';
import type { Post as PostType } from 'content-collections';
import Link from 'next/link';

import { Section } from './layout-section';

export const PagePost = ({ post }: { post: PostType }) => {
  return (
    <>
      <Section id={post.title}>
        <h1 className="-ml-1 pb-0">{post.title}</h1>
        <h3 className="font-bold text-xl md:text-3xl">{post.summary}</h3>
        <p className="font-light text-lg md:text-xl">
          by <Link href="/#about">me</Link> on{' '}
          {new Date(post.date).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          })}
        </p>
      </Section>
      <Section id={`${post.title}-content`}>
        <MDXContent code={post.mdx || ''} />
      </Section>

      <section className="container mx-auto h-24">
        <div className="flex items-center justify-between pt-8 pb-8">
          {post.prev ? (
            <span className="font-medium text-sm">
              <Link href={post.prev}>prev</Link>
            </span>
          ) : (
            <div className="w-16" />
          )}
          <span className="font-medium text-sm">
            <Link href="/posts">all posts</Link>
          </span>
          {post.next ? (
            <span className="font-medium text-sm">
              <Link href={post.next}>next</Link>
            </span>
          ) : (
            <div className="w-16" />
          )}
        </div>
      </section>
    </>
  );
};
