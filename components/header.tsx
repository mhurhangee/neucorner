'use client'

import { useState } from 'react'

import Link from 'next/link'

import { Button } from './ui/button'

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="container">
        <div className="flex items-center justify-between">

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? '✕' : '☰'}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="flex flex-col gap-4 py-4">
            <Link href="/" className="nav-link" onClick={() => setMenuOpen(false)}>
              home
            </Link>
            <Link href="/#about" className="nav-link" onClick={() => setMenuOpen(false)}>
              about
            </Link>
            <Link href="/#posts" className="nav-link" onClick={() => setMenuOpen(false)}>
              posts
            </Link>
            <Link href="/experiments" className="nav-link" onClick={() => setMenuOpen(false)}>
              experiments
            </Link>
          </div>
        )}
    </nav>
  )
}
