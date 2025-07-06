'use client'

import { useMemo, useState } from 'react'

import { Alert, AlertDescription } from '@/components/ui/alert'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { AlertCircle, Check, Copy } from 'lucide-react'

import { JsonNode } from './node'
import type { JsonViewerProps } from './types'
import { copyToClipboard, validateJson } from './utils'

export default function JsonViewer({
  data,
  defaultView = 'tree',
  maxHeight = '600px',
  showCopyPath = true,
}: JsonViewerProps) {
  const [activeTab, setActiveTab] = useState(defaultView)
  const [copiedRaw, setCopiedRaw] = useState(false)
  const [copiedPath, setCopiedPath] = useState<string | null>(null)

  const jsonResult = useMemo(() => {
    if (typeof data === 'string') {
      return validateJson(data)
    }
    return { isValid: true, data }
  }, [data])

  const formattedJson = useMemo(() => {
    if (jsonResult.isValid && jsonResult.data) {
      return JSON.stringify(jsonResult.data, null, 2)
    }
    return typeof data === 'string' ? data : JSON.stringify(data, null, 2)
  }, [jsonResult, data])

  const handleCopyRaw = async () => {
    try {
      await copyToClipboard(formattedJson)
      setCopiedRaw(true)
      setTimeout(() => setCopiedRaw(false), 2000)
    } catch (error) {
      console.error('Failed to copy JSON:', error)
    }
  }

  const handleCopyPath = (path: string) => {
    setCopiedPath(path)
    setTimeout(() => setCopiedPath(null), 2000)
  }

  if (!jsonResult.isValid) {
    return (
      <>
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{jsonResult.error}</AlertDescription>
        </Alert>
        <div className="mt-4">
          <pre className="overflow-auto rounded-md p-4 text-sm">
            {typeof data === 'string' ? data : JSON.stringify(data)}
          </pre>
        </div>
      </>
    )
  }

  const jsonData = jsonResult.data

  return (
    <>
      <Tabs
        value={activeTab}
        onValueChange={(value: string) => setActiveTab(value as 'raw' | 'tree')}
      >
        <div className="mb-4 flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="tree">Tree View</TabsTrigger>
            <TabsTrigger value="raw">Raw JSON</TabsTrigger>
          </TabsList>

          {activeTab === 'raw' && (
            <Button
              size="sm"
              onClick={handleCopyRaw}
              className="flex items-center gap-2 bg-transparent"
            >
              {copiedRaw ? (
                <>
                  <Check className="h-4 w-4 text-green-500" />
                  Copied
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" />
                  Copy JSON
                </>
              )}
            </Button>
          )}
          {activeTab === 'tree' && (
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2">
                {copiedPath && (
                  <Badge variant="secondary" className="text-xs">
                    Copied: {copiedPath}
                  </Badge>
                )}
                <Badge variant="outline">
                  {Array.isArray(jsonData) ? 'Array' : typeof jsonData}
                </Badge>
              </div>
            </div>
          )}
        </div>

        <TabsContent value="tree" className="mt-0">
          <div className="overflow-auto p-4 font-mono text-sm" style={{ maxHeight }}>
            <JsonNode
              data={jsonData}
              path={['root']}
              onCopyPath={showCopyPath ? handleCopyPath : undefined}
            />
          </div>
        </TabsContent>

        <TabsContent value="raw" className="mt-0">
          <div className="overflow-auto" style={{ maxHeight }}>
            <pre className="p-4 font-mono text-sm whitespace-pre-wrap">{formattedJson}</pre>
          </div>
        </TabsContent>
      </Tabs>
    </>
  )
}
