export interface JsonViewerProps {
  data: string | object
  defaultView?: 'raw' | 'tree'
  maxHeight?: string
  showCopyPath?: boolean
}

export interface JsonNodeProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any
  path: string[]
  isLast?: boolean
  onCopyPath?: (path: string) => void
}
