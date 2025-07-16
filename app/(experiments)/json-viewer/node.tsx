'use client';

import { Check, ChevronDown, ChevronRight, Copy } from 'lucide-react';
import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

import type { JsonNodeProps, JsonValue } from './types';
import { copyToClipboard, formatJsonPath, getJsonType } from './utils';

export function JsonNode({ data, path, onCopyPath }: JsonNodeProps) {
  const [isExpanded, setIsExpanded] = useState(path.length < 2); // Auto-expand first 2 levels
  const [copied, setCopied] = useState(false);

  const type = getJsonType(data);
  const isExpandable = type === 'object' || type === 'array';
  const hasChildren =
    isExpandable &&
    ((Array.isArray(data) && data.length > 0) ||
      (data !== null &&
        typeof data === 'object' &&
        Object.keys(data).length > 0));

  const handleCopyPath = async () => {
    const pathString = formatJsonPath(path);
    try {
      await copyToClipboard(pathString);
      setCopied(true);
      onCopyPath?.(pathString);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Still call onCopyPath to show the user what would have been copied
      onCopyPath?.(pathString);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const renderValue = () => {
    const renderMap = {
      string: (
        <span className="text-green-600 dark:text-green-400">
          &quot;{data as string}&quot;
        </span>
      ),
      number: (
        <span className="text-blue-600 dark:text-blue-400">
          {data as number}
        </span>
      ),
      boolean: (
        <span className="text-purple-600 dark:text-purple-400">
          {String(data)}
        </span>
      ),
      null: <span className="text-gray-500 dark:text-gray-400">null</span>,
      array: (
        <span className="text-gray-600 dark:text-gray-300">
          [{Array.isArray(data) ? data.length : 0}{' '}
          {Array.isArray(data) && data.length === 1 ? 'item' : 'items'}]
        </span>
      ),
      object: (() => {
        const keys =
          data !== null && typeof data === 'object' && !Array.isArray(data)
            ? Object.keys(data)
            : [];
        return (
          <span className="text-gray-600 dark:text-gray-300">
            {'{'}
            {keys.length} {keys.length === 1 ? 'property' : 'properties'}
            {'}'}
          </span>
        );
      })(),
    };

    return (
      renderMap[type as keyof typeof renderMap] || (
        <span className="text-gray-500">{String(data)}</span>
      )
    );
  };

  const renderChildren = () => {
    if (!(isExpandable && isExpanded && hasChildren)) {
      return null;
    }

    if (Array.isArray(data)) {
      return (
        <div className="ml-4 border-gray-200 border-l pl-4 dark:border-gray-700">
          {data.map((item, index) => (
            <JsonNode
              data={item}
              isLast={index === data.length - 1}
              key={`${path.join('-')}-${index}-${typeof item === 'object' ? JSON.stringify(Object.keys(item || {})) : String(item).substring(0, 10)}`}
              onCopyPath={onCopyPath}
              path={[...path, String(index)]}
            />
          ))}
        </div>
      );
    }

    // Safe type assertion since we've already checked that data is an object and not null
    const entries =
      data !== null && typeof data === 'object' && !Array.isArray(data)
        ? Object.entries(data as Record<string, JsonValue>)
        : [];
    return (
      <div className="ml-4 border-gray-200 border-l pl-4 dark:border-gray-700">
        {entries.map(([key, value], index) => (
          <div className="flex items-start gap-2 py-1" key={key}>
            <div className="flex min-w-0 items-start gap-2">
              <span className="shrink-0 pt-2 font-medium text-blue-700 dark:text-blue-300">
                {key}:
              </span>
              <JsonNode
                data={value}
                isLast={index === entries.length - 1}
                onCopyPath={onCopyPath}
                path={[...path, key]}
              />
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="py-1">
      <div className="group flex items-center gap-2">
        {isExpandable && hasChildren && (
          <Button
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
          <Badge className="text-xs" variant="outline">
            {type}
          </Badge>
        </div>

        {onCopyPath && (
          <Button
            className="h-6 w-6 p-0 opacity-0 transition-opacity group-hover:opacity-100"
            onClick={handleCopyPath}
            title="Copy path"
          >
            {copied ? (
              <Check className="h-3 w-3 text-green-500" />
            ) : (
              <Copy className="h-3 w-3" />
            )}
          </Button>
        )}
      </div>

      {renderChildren()}
    </div>
  );
}
