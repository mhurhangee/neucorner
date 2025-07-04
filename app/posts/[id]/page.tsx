import { allPosts } from "content-collections"
import { MDXContent } from "@content-collections/mdx/react";
import { notFound } from "next/navigation";

export default async function Post({ params }: { params: Promise<{ id: string }> }) {
    const paramsValue = await params
    const post = allPosts.find((post) => post._meta.path === paramsValue.id)

    if (!post) {
        return notFound()
    }

    return (
        <main>
            <h1>{post.title}</h1>
            <p>{post.summary}</p>
            <MDXContent code={post.mdx || ""} />
        </main>
    )
}