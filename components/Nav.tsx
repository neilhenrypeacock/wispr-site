'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { href: '/', label: 'home' },
    { href: '/about', label: 'about' },
    { href: '/pricing', label: 'pricing' },
  ]

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 h-16"
        style={{
          background: scrolled ? 'rgba(7,17,30,0.9)' : 'rgba(7,17,30,0.6)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid var(--border)',
          transition: 'background 0.3s',
        }}
      >
        {/* Wordmark */}
        <Link
          href="/"
          className="font-display font-bold text-xl tracking-tight"
          style={{ color: 'var(--text-primary)', letterSpacing: '-0.02em' }}
        >
          wispr
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-sm font-medium transition-colors duration-150"
                style={{
                  color: pathname === href ? 'var(--text-primary)' : 'var(--text-secondary)',
                  fontWeight: 500,
                  fontSize: '15px',
                }}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <Link
          href="/#waitlist"
          className="hidden md:block rounded-full font-semibold text-sm transition-all duration-150 hover:opacity-90"
          style={{
            background: 'var(--electric)',
            color: 'var(--ink)',
            padding: '10px 20px',
            fontSize: '14px',
            fontWeight: 600,
          }}
        >
          join the waitlist →
        </Link>

        {/* Mobile burger */}
        <button
          className="md:hidden p-1"
          style={{ background: 'none', border: 'none', color: 'var(--text-primary)', cursor: 'pointer' }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="menu"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {menuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="fixed top-16 left-0 right-0 z-40 flex flex-col gap-4 p-6 md:hidden"
          style={{ background: 'var(--royal)', borderBottom: '1px solid var(--border)' }}
        >
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-base font-medium py-2"
              style={{
                color: 'var(--text-secondary)',
                borderBottom: '1px solid var(--border)',
              }}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/#waitlist"
            onClick={() => setMenuOpen(false)}
            className="rounded-full font-semibold text-center py-3 mt-2 transition-opacity hover:opacity-90"
            style={{ background: 'var(--electric)', color: 'var(--ink)', fontSize: '15px', fontWeight: 600 }}
          >
            join the waitlist →
          </Link>
        </div>
      )}
    </>
  )
}
