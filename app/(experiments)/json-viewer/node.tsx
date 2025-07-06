'use client'

import { useState } from 'react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

import { Check, ChevronDown, ChevronRight, Copy } from 'lucide-react'

import type { JsonNodeProps } from './types'
import { copyToClipboard, formatJsonPath, getJsonType } from './utils'

export function JsonNode({ data, path, onCopyPath }: JsonNodeProps) {
  const [isExpanded, setIsExpanded] = useState(path.length < 2) // Auto-expand first 2 levels
  const [copied, setCopied] = useState(false)

  const type = getJsonType(data)
  const isExpandable = type === 'object' || type === 'array'
  const hasChildren =
    isExpandable && (Array.isArray(data) ? data.length > 0 : Object.keys(data).length > 0)

  const handleCopyPath = async () => {
    const pathString = formatJsonPath(path)
    try {
      await copyToClipboard(pathString)
      setCopied(true)
      onCopyPath?.(pathString)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      console.warn('Clipboard copy failed, but path was generated:', pathString)
      // Still call onCopyPath to show the user what would have been copied
      onCopyPath?.(pathString)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const renderValue = () => {
    switch (type) {
      case 'string':
        return <span className="text-green-600 dark:text-green-400">&quot;{data}&quot;</span>
      case 'number':
        return <span className="text-blue-600 dark:text-blue-400">{data}</span>
      case 'boolean':
        return <span className="text-purple-600 dark:text-purple-400">{String(data)}</span>
      case 'null':
        return <span className="text-gray-500 dark:text-gray-400">null</span>
      case 'array':
        return (
          <span className="text-gray-600 dark:text-gray-300">
            [{data.length} {data.length === 1 ? 'item' : 'items'}]
          </span>
        )
      case 'object':
        const keys = Object.keys(data)
        return (
          <span className="text-gray-600 dark:text-gray-300">
            {'{'}
            {keys.length} {keys.length === 1 ? 'property' : 'properties'}
            {'}'}
          </span>
        )
      default:
        return <span className="text-gray-500">{String(data)}</span>
    }
  }

  const renderChildren = () => {
    if (!isExpandable || !isExpanded || !hasChildren) return null

    if (Array.isArray(data)) {
      return (
        <div className="ml-4 border-l border-gray-200 pl-4 dark:border-gray-700">
          {data.map((item, index) => (
            <JsonNode
              key={index}
              data={item}
              path={[...path, String(index)]}
              isLast={index === data.length - 1}
              onCopyPath={onCopyPath}
            />
          ))}
        </div>
      )
    }

    const entries = Object.entries(data)
    return (
      <div className="ml-4 border-l border-gray-200 pl-4 dark:border-gray-700">
        {entries.map(([key, value], index) => (
          <div key={key} className="flex items-start gap-2 py-1">
            <div className="flex min-w-0 items-start gap-2">
              <span className="shrink-0 pt-2 font-medium text-blue-700 dark:text-blue-300">
                {key}:
              </span>
              <JsonNode
                data={value}
                path={[...path, key]}
                isLast={index === entries.length - 1}
                onCopyPath={onCopyPath}
              />
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="py-1">
      <div className="group flex items-center gap-2">
        {isExpandable && hasChildren && (
          <Button
            variant="ghost"
            size="sm"
            className="h-4 w-4 p-0 hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? (
              <ChevronDown className="h-3 w-3" />
            ) : (
              <ChevronRight className="h-3 w-3" />
            )}
          </Button>
        )}

        {!isExpandable && <div className="w-4" />}

        <div className="flex min-w-0 flex-1 items-center gap-2">
          {renderValue()}
          <Badge variant="outline" className="text-xs">
            {type}
          </Badge>
        </div>

        {onCopyPath && (
          <Button
            variant="ghost"
            size="sm"
            className="h-6 w-6 p-0 opacity-0 transition-opacity group-hover:opacity-100"
            onClick={handleCopyPath}
            title="Copy path"
          >
            {copied ? <Check className="h-3 w-3 text-green-500" /> : <Copy className="h-3 w-3" />}
          </Button>
        )}
      </div>

      {renderChildren()}
    </div>
  )
}
