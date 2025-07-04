import { ArrowRightIcon } from '@radix-ui/react-icons'

import Link from 'next/link'

import { allPosts } from 'content-collections'

import { Section } from './section'

export const PostsSection = () => {
  return (
    <Section id="posts">
      <h2>posts</h2>
      <p>my thoughts, insights and ramblings.</p>
      <div className="ml-4 mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {allPosts.map(post => (
          <Link key={post._meta.path} href={`/posts/${post._meta.path}`}>
            <article className="border-border group cursor-pointer border-2 transition-all hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="p-6">
                <div className="flex items-center justify-between text-sm font-medium">
                  <div className="mb-4">
                    <span className="border-border border-2 px-3 py-1 text-sm font-bold uppercase">
                      {post.category}
                    </span>
                  </div>
                  <ArrowRightIcon className="hidden h-6 w-6 group-hover:block" />
                </div>
                <h3 className="decoration-4 underline-offset-4 group-hover:underline">
                  {post.title}
                </h3>

                <p className="mb-6 leading-relaxed font-medium">{post.summary}</p>

                <div className="flex items-center justify-between text-sm font-medium">
                  <div className="flex items-center space-x-2">
                    <span>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                      })}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>{post.readingTime}</span>
                  </div>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </Section>
  )
}
