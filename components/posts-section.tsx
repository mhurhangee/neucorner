import { Section } from "./section"
import { allPosts } from "content-collections"
import Link from "next/link"
import { ArrowRightIcon } from "@radix-ui/react-icons"

export const PostsSection = () => {
    return (
        <Section id="posts">
            <h2>posts</h2>
            <p>my thoughts, insights and ramblings.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                    {allPosts.map((post) => (
                        <Link key={post._meta.path} href={`/posts/${post._meta.path}`}>
                        <article
                            className="border-2 border-border hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer group"
                        >
                            <div className="p-6">
                            <div className="flex items-center justify-between text-sm font-medium">
                                <div className="mb-4">
                                    <span className="border-2 border-border px-3 py-1 text-sm font-bold uppercase">{post.category}</span>
                                </div>
                                <ArrowRightIcon className="w-6 h-6 hidden group-hover:block" />
                            </div>
                                <h3 className="group-hover:underline decoration-4 underline-offset-4">
                                    {post.title}
                                </h3>

                                <p className="font-medium leading-relaxed mb-6">{post.summary}</p>

                                <div className="flex items-center justify-between text-sm font-medium">
                                    <div className="flex items-center space-x-2">
                                        <span>
                                            {new Date(post.date).toLocaleDateString("en-US", {
                                                month: "short",
                                                day: "numeric",
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