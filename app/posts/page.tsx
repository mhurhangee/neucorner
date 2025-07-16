import { allPosts } from 'content-collections';

import { Container } from '@/components/layout-container';
import { Section } from '@/components/layout-section';
import { Box } from '@/components/ui/box';

export default function PostsPage() {
  return (
    <Container>
      <Section id="posts-hero">
        <h1>posts</h1>
        <p className="ml-2">of my thoughts, insights and ramblings.</p>
      </Section>
      <Section id="posts">
        <h2>the collection</h2>
        <p>of pretty pointless posts.</p>
        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {allPosts
            .sort(
              (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
            )
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
    </Container>
  );
}
