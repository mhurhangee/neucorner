'use client';

import { AlertCircle, Check, Copy } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { JsonNode } from './node';
import type { JsonValue, JsonViewerProps } from './types';
import { copyToClipboard, validateJson } from './utils';

export default function JsonViewer({
  data,
  defaultView = 'tree',
  maxHeight = '600px',
  showCopyPath = true,
}: JsonViewerProps) {
  const [activeTab, setActiveTab] = useState(defaultView);
  const [copiedRaw, setCopiedRaw] = useState(false);
  const [copiedPath, setCopiedPath] = useState<string | null>(null);

  const jsonResult = useMemo(() => {
    if (typeof data === 'string') {
      return validateJson(data);
    }
    return { isValid: true, data };
  }, [data]);

  const formattedJson = useMemo(() => {
    if (jsonResult.isValid && jsonResult.data) {
      return JSON.stringify(jsonResult.data, null, 2);
    }
    return typeof data === 'string' ? data : JSON.stringify(data, null, 2);
  }, [jsonResult, data]);

  const handleCopyRaw = async () => {
    await copyToClipboard(formattedJson);
    setCopiedRaw(true);
    setTimeout(() => setCopiedRaw(false), 2000);
  };

  const handleCopyPath = (path: string) => {
    setCopiedPath(path);
    setTimeout(() => setCopiedPath(null), 2000);
  };

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
    );
  }

  const jsonData = jsonResult.data;

  return (
    <Tabs
      onValueChange={(value: string) => setActiveTab(value as 'raw' | 'tree')}
      value={activeTab}
    >
      <div className="mb-4 flex items-center justify-between">
        <TabsList>
          <TabsTrigger value="tree">Tree View</TabsTrigger>
          <TabsTrigger value="raw">Raw JSON</TabsTrigger>
        </TabsList>

        {activeTab === 'raw' && (
          <Button
            className="flex items-center gap-2 bg-transparent"
            onClick={handleCopyRaw}
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
                <Badge className="text-xs" variant="secondary">
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

      <TabsContent className="mt-0" value="tree">
        <div
          className="overflow-auto p-4 font-mono text-sm"
          style={{ maxHeight }}
        >
          <JsonNode
            data={jsonData as JsonValue}
            onCopyPath={showCopyPath ? handleCopyPath : undefined}
            path={['root']}
          />
        </div>
      </TabsContent>

      <TabsContent className="mt-0" value="raw">
        <div className="overflow-auto" style={{ maxHeight }}>
          <pre className="whitespace-pre-wrap p-4 font-mono text-sm">
            {formattedJson}
          </pre>
        </div>
      </TabsContent>
    </Tabs>
  );
}
