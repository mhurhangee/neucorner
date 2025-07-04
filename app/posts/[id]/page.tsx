import { allPosts } from "content-collections"
import { MDXContent } from "@content-collections/mdx/react";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { Header } from "@/components/header";
import { Section } from "@/components/section";
import Link from "next/link";

export default async function Post({ params }: { params: Promise<{ id: string }> }) {
    const paramsValue = await params
    const post = allPosts.find((post) => post._meta.path === paramsValue.id)

    if (!post) {
        return notFound()
    }

    return (
        <Container>
            <Header />
            <Section id={post.title}>
                <h1>{post.title}</h1>

                <div className="flex items-center justify-between border-b border-border">
                    <p className="text-lg font-semibold">{post.summary}</p>
                    <div>
                        <p className="text-sm font-medium"> by <Link href="/#about">me</Link> • {post.date} </p>
                    </div>
                </div>
                <MDXContent code={post.mdx || ""} />

            </Section>
            <section className="h-24 container mx-auto">
                <div className="flex items-center justify-between pt-8 pb-8">
                    {post.prev ? <span className="text-sm font-medium"><Link href={post.prev}>prev</Link></span> : <div className="w-16" />}
                    <span className="text-sm font-medium"><Link href="/#posts">all posts</Link></span>
                    {post.next ? <span className="text-sm font-medium"><Link href={post.next}>next</Link></span> : <div className="w-16" />}
                </div>
            </section>
        </Container>
    )
}