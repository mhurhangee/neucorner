'use client'

import { useState } from 'react'

import Link from 'next/link'

import { appConfig } from '@/lib/config/app'

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="border-b-2 border-black">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="site-logo no-underline">
              {appConfig.emojiFavicon}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-6 md:flex">
            <Link href="/" className="nav-link">
              home
            </Link>
            <Link href="/#about" className="nav-link">
              about
            </Link>
            <Link href="/#posts" className="nav-link">
              posts
            </Link>
            <Link href="/experiments" className="nav-link">
              experiments
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="flex flex-col gap-4 py-4 md:hidden">
            <Link href="/#about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
              about
            </Link>
            <Link href="/#posts" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
              posts
            </Link>
            <Link href="/experiments" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
              experiments
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
