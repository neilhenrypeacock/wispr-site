'use client'

import { useState } from 'react'

export default function WaitlistForm({ center = false }: { center?: boolean }) {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !email.includes('@')) {
      setError('please enter a valid email address')
      return
    }
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name }),
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        setError('something went wrong. please try again.')
      }
    } catch {
      setError('something went wrong. please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <p style={{ color: 'var(--success)', fontSize: '15px', padding: '14px 0' }}>
        you're on the list. we'll be in touch.
      </p>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-wrap gap-3"
      style={{ maxWidth: '480px', justifyContent: center ? 'center' : 'flex-start', margin: center ? '0 auto' : undefined }}
    >
      <input
        type="text"
        placeholder="first name"
        value={name}
        onChange={e => setName(e.target.value)}
        className="flex-1 min-w-[160px]"
        style={{
          background: 'rgba(230,235,244,0.06)',
          border: '1px solid var(--border)',
          borderRadius: '12px',
          padding: '14px 18px',
          fontFamily: 'var(--font-body)',
          fontSize: '15px',
          color: 'var(--text-primary)',
          outline: 'none',
        }}
      />
      <input
        type="email"
        placeholder="your email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
        className="flex-1 min-w-[200px]"
        style={{
          background: 'rgba(230,235,244,0.06)',
          border: error ? '1px solid var(--error)' : '1px solid var(--border)',
          borderRadius: '12px',
          padding: '14px 18px',
          fontFamily: 'var(--font-body)',
          fontSize: '15px',
          color: 'var(--text-primary)',
          outline: 'none',
        }}
      />
      <button
        type="submit"
        disabled={loading}
        style={{
          background: 'var(--electric)',
          color: 'var(--ink)',
          border: 'none',
          borderRadius: '9999px',
          padding: '14px 28px',
          fontFamily: 'var(--font-body)',
          fontSize: '15px',
          fontWeight: 600,
          cursor: loading ? 'not-allowed' : 'pointer',
          opacity: loading ? 0.6 : 1,
          whiteSpace: 'nowrap',
          transition: 'opacity 0.15s',
        }}
      >
        {loading ? 'joining…' : 'join the waitlist →'}
      </button>
      {error && (
        <p className="w-full" style={{ color: 'var(--error)', fontSize: '13px', marginTop: '-4px' }}>
          {error}
        </p>
      )}
    </form>
  )
}
