import { notFound } from 'next/navigation'

import { Container } from '@/components/layout-container'
import { PagePost } from '@/components/page-posts'

import { allPosts } from 'content-collections'

export default async function PostPage({ params }: { params: Promise<{ id: string }> }) {
  const paramsValue = await params
  const post = allPosts.find(post => post._meta.path === paramsValue.id)

  if (!post) {
    return notFound()
  }

  return (
    <Container>
      <PagePost post={post} />
    </Container>
  )
}
