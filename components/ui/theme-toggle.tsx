'use client';

import { MoonIcon, SunIcon } from 'lucide-react';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

export function useThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [systemTheme, setSystemTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setSystemTheme(mediaQuery.matches ? 'dark' : 'light');

    const handleChange = (e: MediaQueryListEvent) => {
      setSystemTheme(e.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const switchTheme = () => {
    switch (theme) {
      case 'light':
        setTheme('dark');
        break;
      case 'dark':
        setTheme('light');
        break;
      case 'system':
        setTheme(systemTheme === 'light' ? 'dark' : 'light');
        break;
      default:
        break;
    }
  };

  const toggleTheme = () => {
    if (!document.startViewTransition) {
      switchTheme();
    }
    document.startViewTransition(switchTheme);
  };

  return { theme, toggleTheme };
}

export function ThemeToggle() {
  const { toggleTheme } = useThemeToggle();

  return (
    <Button onClick={toggleTheme} size="icon" variant="ghost">
      <SunIcon
        className="dark:-rotate-90 rotate-0 scale-100 transition-all dark:scale-0"
        size={12}
      />
      <MoonIcon
        className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
        size={12}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
