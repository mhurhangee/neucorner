// Regex patterns defined at the top level for better performance
const DIGIT_REGEX = /^\d+$/;
const VALID_IDENTIFIER_REGEX = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;

export function validateJson(jsonString: string): {
  isValid: boolean;
  data?: unknown;
  error?: string;
} {
  try {
    const parsed = JSON.parse(jsonString);
    return { isValid: true, data: parsed };
  } catch (error) {
    return {
      isValid: false,
      error: error instanceof Error ? error.message : 'Invalid JSON format',
    };
  }
}

export function getJsonType(value: unknown): string {
  if (value === null) {
    return 'null';
  }
  if (Array.isArray(value)) {
    return 'array';
  }
  return typeof value;
}

export function formatJsonPath(path: string[]): string {
  return path.reduce((acc, key, index) => {
    if (index === 0) {
      return key;
    }
    // Check if key is a number (array index)
    if (DIGIT_REGEX.test(key)) {
      return `${acc}[${key}]`;
    }
    // Check if key needs quotes (contains special characters)
    if (VALID_IDENTIFIER_REGEX.test(key)) {
      return `${acc}.${key}`;
    }
    return `${acc}["${key}"]`;
  }, '');
}

export function copyToClipboard(text: string): Promise<void> {
  // Fallback for when clipboard API fails due to focus issues
  if (!navigator.clipboard) {
    return fallbackCopyTextToClipboard(text);
  }

  return navigator.clipboard.writeText(text).catch(() => {
    return fallbackCopyTextToClipboard(text);
  });
}

function fallbackCopyTextToClipboard(text: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const textArea = document.createElement('textarea');
    textArea.value = text;

    // Avoid scrolling to bottom
    textArea.style.top = '0';
    textArea.style.left = '0';
    textArea.style.position = 'fixed';
    textArea.style.opacity = '0';

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      const successful = document.execCommand('copy');
      document.body.removeChild(textArea);
      if (successful) {
        resolve();
      } else {
        reject(new Error('Copy command failed'));
      }
    } catch (err) {
      document.body.removeChild(textArea);
      reject(err);
    }
  });
}
