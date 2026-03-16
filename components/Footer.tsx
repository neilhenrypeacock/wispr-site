import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ background: 'var(--royal)', borderTop: '1px solid var(--border)', padding: '48px 24px' }}>
      <div className="max-w-6xl mx-auto flex flex-col gap-6">
        <div className="flex flex-wrap justify-between items-start gap-6">
          <div>
            <div className="font-display font-bold text-xl" style={{ color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>wispr</div>
            <div style={{ color: 'var(--text-muted)', fontSize: '13px', marginTop: '4px' }}>your coach. your episode. every day.</div>
          </div>
          <div className="flex flex-wrap gap-6">
            {[
              { href: '/', label: 'home' },
              { href: '/about', label: 'about' },
              { href: '/pricing', label: 'pricing' },
              { href: '/privacy', label: 'privacy policy' },
              { href: '/terms', label: 'terms' },
            ].map(({ href, label }) => (
              <Link key={href} href={href} style={{ color: 'var(--text-secondary)', fontSize: '14px', textDecoration: 'none' }}>
                {label}
              </Link>
            ))}
          </div>
        </div>
        <div
          className="flex flex-wrap justify-between gap-3 pt-6"
          style={{ borderTop: '1px solid var(--border)', fontSize: '13px', color: 'var(--text-muted)' }}
        >
          <span>© wispr 2026</span>
          <span>built with care.</span>
        </div>
      </div>
    </footer>
  )
}
