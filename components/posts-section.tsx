import Link from 'next/link'

import { allPosts } from 'content-collections'

import { Section } from './section'

export const PostsSection = () => {
  return (
    <Section id="posts">
      <h2>posts</h2>
      <p>my thoughts, insights and ramblings.</p>
      <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
        {allPosts
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
          .map(post => (
            <Link key={post._meta.path} href={`/posts/${post._meta.path}`} className="no-underline">
              <article className="border-border group cursor-pointer border-2 transition-all hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="px-6 py-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold uppercase">{post.category}</span>
                    <div className="minor-text">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </div>
                  </div>
                  <h3 className="decoration-4 underline-offset-4 group-hover:underline">
                    {post.title}
                  </h3>

                  <h4>{post.summary}</h4>
                </div>
              </article>
            </Link>
          ))}
      </div>
    </Section>
  )
}
