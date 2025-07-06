'use client'

import { useState } from 'react'

import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'

import { Container } from '@/components/layout-container'
import { Section } from '@/components/layout-section'

import JsonViewer from './viewer'

const sampleApiResponse = {
  data: {
    users: [
      {
        id: 1,
        name: 'John Doe',
        email: 'john@example.com',
        profile: {
          age: 30,
          location: 'New York',
          preferences: {
            theme: 'dark',
            notifications: true,
            languages: ['en', 'es'],
          },
        },
        posts: [
          {
            id: 101,
            title: 'Hello World',
            content: 'This is my first post!',
            tags: ['intro', 'hello'],
            published: true,
            publishedAt: '2024-01-15T10:30:00Z',
          },
        ],
      },
      {
        id: 2,
        name: 'Jane Smith',
        email: 'jane@example.com',
        profile: {
          age: 28,
          location: 'San Francisco',
          preferences: {
            theme: 'light',
            notifications: false,
            languages: ['en'],
          },
        },
        posts: [],
      },
    ],
    pagination: {
      page: 1,
      limit: 10,
      total: 2,
      hasNext: false,
    },
  },
  metadata: {
    timestamp: '2024-01-20T15:45:30Z',
    version: '1.2.0',
    requestId: 'req_123456789',
  },
  status: 'success',
}

export default function JsonViewerDemo() {
  const [jsonInput, setJsonInput] = useState(JSON.stringify(sampleApiResponse, null, 2))
  const [currentJson, setCurrentJson] = useState<string | object>(sampleApiResponse)

  const handleUpdateJson = () => {
    setCurrentJson(jsonInput)
  }

  return (
    <Container>
      <Section id="json-viewer-hero">
        <h1>json viewer</h1>
        <p>A shadcn-inspired JSON viewer for debugging API responses with tree and raw views.</p>
        <ul>
          <li>
            <Link href="#demo">demo</Link>
          </li>
          <li>
            <Link href="/posts/json-viewer">post</Link>
          </li>
          <li>
            <Link href="https://github.com/mhurhangee/neucorner/tree/main/app/(experiments)/json-viewer">
              code
            </Link>
          </li>
        </ul>
      </Section>

      <Section id="demo">
        <h3>json input</h3>
        <p>to test the demo with</p>
        <div className="space-y-4">
          <Textarea
            value={jsonInput}
            onChange={e => setJsonInput(e.target.value)}
            placeholder="Paste your JSON here..."
            className="max-h-[200px] font-mono text-sm"
          />
          <div className="flex gap-2">
            <Button onClick={handleUpdateJson} variant="nc">
              Update Viewer
            </Button>
          </div>
        </div>
      </Section>

      <Section id="result">
        <div>
          <h3>json viewer</h3>
          <JsonViewer data={currentJson} defaultView="tree" maxHeight="300px" showCopyPath={true} />
        </div>
      </Section>
    </Container>
  )
}
