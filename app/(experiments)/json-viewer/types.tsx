export interface JsonViewerProps {
  data: string | object;
  defaultView?: 'raw' | 'tree';
  maxHeight?: string;
  showCopyPath?: boolean;
}

export type JsonValue =
  | string
  | number
  | boolean
  | null
  | JsonValue[]
  | { [key: string]: JsonValue };

export interface JsonNodeProps {
  data: JsonValue;
  path: string[];
  isLast?: boolean;
  onCopyPath?: (path: string) => void;
}
