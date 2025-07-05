import { notFound } from 'next/navigation'

import { Container } from '@/components/container'
import { Header } from '@/components/header'
import { Post as PostComponent } from '@/components/posts'
import { Footer } from '@/components/footer'

import { allPosts } from 'content-collections'

export default async function Post({ params }: { params: Promise<{ id: string }> }) {
  const paramsValue = await params
  const post = allPosts.find(post => post._meta.path === paramsValue.id)

  if (!post) {
    return notFound()
  }

  return (
    <Container>
      <Header />
      <PostComponent post={post} />
      <Footer />
    </Container>
  )
}
