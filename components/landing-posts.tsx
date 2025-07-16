import { allPosts } from 'content-collections';
import Link from 'next/link';

import { Section } from './layout-section';
import { Box } from './ui/box';

export const Posts = () => {
  return (
    <Section id="posts">
      <h2>recent posts</h2>
      <p>
        Want more? <Link href="/posts">All posts</Link>.
      </p>
      <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
        {allPosts
          .sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          )
          .slice(0, 4)
          .map((post) => (
            <Box
              category={post.category}
              date={post.date}
              href={`/posts/${post._meta.path}`}
              key={post._meta.path}
              summary={post.summary}
              title={post.title}
            />
          ))}
      </div>
    </Section>
  );
};
