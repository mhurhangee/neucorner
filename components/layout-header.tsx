'use client';

import Link from 'next/link';
import { useState } from 'react';

import { Button } from './ui/button';
import { ThemeToggle } from './ui/theme-toggle';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="container">
      <div className="flex items-center">
        {/* Mobile Menu Button */}
        <Button
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
          size="icon"
          variant="ghost"
        >
          {menuOpen ? '✕' : '☰'}
        </Button>
        <ThemeToggle />
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="flex flex-col gap-4 py-4">
          <Link
            className="nav-link"
            href="/"
            onClick={() => setMenuOpen(false)}
          >
            home
          </Link>
          <Link
            className="nav-link"
            href="/#about"
            onClick={() => setMenuOpen(false)}
          >
            about
          </Link>
          <Link
            className="nav-link"
            href="/posts"
            onClick={() => setMenuOpen(false)}
          >
            posts
          </Link>
          <Link
            className="nav-link"
            href="/experiments"
            onClick={() => setMenuOpen(false)}
          >
            experiments
          </Link>
        </div>
      )}
    </nav>
  );
};
