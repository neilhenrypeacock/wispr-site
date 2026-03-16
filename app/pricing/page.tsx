'use client'

import { useState } from 'react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import WaitlistForm from '@/components/WaitlistForm'
import FadeUp from '@/components/FadeUp'

const faqItems = [
  { q: 'is there a free trial?', a: 'yes — 7 days of full access, no credit card required. you get the complete wispr experience from day one.' },
  { q: 'what happens after the trial?', a: 'after 7 days you can subscribe to the pro plan to keep going. pricing is still being finalised — waitlist members will get first access and a locked-in early rate.' },
  { q: 'is it available on android?', a: "iOS only for now. android is on the roadmap — join the waitlist and we'll let you know when it's ready." },
  { q: 'can i cancel anytime?', a: 'yes. cancel anytime, no questions asked. you keep access until the end of your billing period.' },
  { q: 'what AI does wispr use?', a: "wispr uses Claude by Anthropic — one of the most trusted and thoughtful AI systems available. it's built by a company focused on making AI that's safe and genuinely useful." },
  { q: 'is my data private?', a: "yes. your conversations and episodes are private to you. we don't sell your data, and we don't use your personal reflections to train AI models." },
]

function Faq() {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <div style={{ maxWidth: '680px', margin: '56px auto 0' }}>
      {faqItems.map((item, i) => (
        <div key={item.q} style={{ borderBottom: '1px solid var(--border)' }}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex justify-between items-center text-left py-5 gap-4"
            style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '16px', fontWeight: 500, color: 'var(--text-primary)', fontFamily: 'var(--font-body)' }}
          >
            {item.q}
            <svg
              style={{ width: 20, height: 20, color: 'var(--text-muted)', flexShrink: 0, transition: 'transform 0.2s', transform: open === i ? 'rotate(180deg)' : 'none' }}
              fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"
            >
              <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div
            style={{
              maxHeight: open === i ? '200px' : '0',
              overflow: 'hidden',
              transition: 'max-height 0.3s ease',
            }}
          >
            <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.7, paddingBottom: '20px' }}>{item.a}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function Pricing() {
  return (
    <>
      <Nav />

      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 65% 20%, rgba(0,212,255,0.07) 0%, transparent 55%), radial-gradient(ellipse at 15% 85%, rgba(196,151,106,0.05) 0%, transparent 50%)',
          zIndex: 0,
        }}
      />

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-36 pb-16 text-center" style={{ position: 'relative', zIndex: 1 }}>
        <FadeUp>
          <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--amber)', marginBottom: '16px' }}>pricing</p>
          <h1 className="font-display font-bold lowercase" style={{ fontSize: 'clamp(40px, 6vw, 64px)', lineHeight: 1.05, letterSpacing: '-0.03em', marginBottom: '16px' }}>
            straightforward pricing
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '18px', margin: '0 auto', maxWidth: '440px' }}>
            early access members get locked-in founder pricing. join before we open to everyone.
          </p>
        </FadeUp>
      </section>

      {/* PRICING CARDS */}
      <section className="max-w-6xl mx-auto px-6 pb-16" style={{ position: 'relative', zIndex: 1 }}>
        <div className="grid md:grid-cols-2 gap-4" style={{ maxWidth: '700px', margin: '0 auto' }}>

          {/* Free */}
          <FadeUp>
            <div style={{ background: 'var(--royal)', border: '1px solid var(--border)', borderRadius: '22px', padding: '40px', height: '100%', display: 'flex', flexDirection: 'column' }}>
              <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--amber)', marginBottom: '12px' }}>free trial</p>
              <div className="font-display font-bold" style={{ fontSize: '48px', color: 'var(--text-primary)', lineHeight: 1, marginBottom: '4px' }}>£0</div>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '24px' }}>for 7 days · no credit card required</p>
              <div style={{ height: '1px', background: 'var(--border)', margin: '0 0 24px' }} />
              <ul style={{ listStyle: 'none', marginBottom: '32px', flex: 1 }}>
                {['full access to all features', 'unlimited daily episodes', 'all four voices', 'personalised onboarding', '7-day free trial'].map(item => (
                  <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'var(--text-secondary)', padding: '6px 0' }}>
                    <span style={{ width: 16, height: 16, borderRadius: '50%', background: 'rgba(0,212,255,0.15)', border: '1px solid rgba(0,212,255,0.3)', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg width="10" height="10" fill="none" stroke="#00D4FF" strokeWidth="1.5" viewBox="0 0 10 10"><path d="M2 5l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="/#waitlist"
                style={{
                  display: 'block',
                  textAlign: 'center',
                  background: 'transparent',
                  color: 'var(--electric)',
                  border: '1px solid rgba(0,212,255,0.3)',
                  borderRadius: '9999px',
                  padding: '14px 28px',
                  fontSize: '15px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  transition: 'all 0.15s',
                }}
              >
                join waitlist to start free →
              </a>
            </div>
          </FadeUp>

          {/* Pro */}
          <FadeUp delay={0.1}>
            <div style={{ background: 'var(--royal)', border: '1px solid rgba(0,212,255,0.3)', borderRadius: '22px', padding: '40px', position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
              <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: 'var(--electric)', color: 'var(--ink)', fontSize: '11px', fontWeight: 600, padding: '4px 16px', borderRadius: '9999px', letterSpacing: '0.04em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
                early access
              </div>
              <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--amber)', marginBottom: '12px' }}>pro</p>
              <div className="font-display font-bold" style={{ fontSize: '40px', color: 'var(--text-primary)', lineHeight: 1.1, marginBottom: '4px' }}>coming<br />soon</div>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '24px' }}>locked-in rate for waitlist members</p>
              <div style={{ height: '1px', background: 'var(--border)', margin: '0 0 24px' }} />
              <ul style={{ listStyle: 'none', marginBottom: '32px', flex: 1 }}>
                {['everything in free trial', 'unlimited episodes, every day', 'all voices including premium', 'priority generation', 'episode library', 'email episode companion'].map(item => (
                  <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'var(--text-secondary)', padding: '6px 0' }}>
                    <span style={{ width: 16, height: 16, borderRadius: '50%', background: 'rgba(0,212,255,0.15)', border: '1px solid rgba(0,212,255,0.3)', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg width="10" height="10" fill="none" stroke="#00D4FF" strokeWidth="1.5" viewBox="0 0 10 10"><path d="M2 5l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="/#waitlist"
                style={{
                  display: 'block',
                  textAlign: 'center',
                  background: 'var(--electric)',
                  color: 'var(--ink)',
                  borderRadius: '9999px',
                  padding: '14px 28px',
                  fontSize: '15px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  transition: 'opacity 0.15s',
                }}
              >
                join the waitlist →
              </a>
            </div>
          </FadeUp>
        </div>
        <p className="text-center" style={{ color: 'var(--text-muted)', fontSize: '13px', marginTop: '24px' }}>
          waitlist members secure early access pricing before public launch.
        </p>
      </section>

      {/* FAQ */}
      <section className="max-w-6xl mx-auto px-6 pb-24" style={{ position: 'relative', zIndex: 1 }}>
        <FadeUp>
          <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--amber)', marginBottom: '16px' }}>questions</p>
          <h2 className="font-display font-bold lowercase" style={{ fontSize: 'clamp(28px, 4vw, 40px)', letterSpacing: '-0.02em' }}>things people ask</h2>
        </FadeUp>
        <Faq />
      </section>

      {/* CTA */}
      <div
        className="text-center px-6 py-24"
        style={{
          background: 'linear-gradient(135deg, var(--royal) 0%, rgba(22,53,100,0.5) 100%)',
          borderTop: '1px solid var(--border)',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--amber)', marginBottom: '16px' }}>early access</p>
        <h2 className="font-display font-bold lowercase" style={{ fontSize: 'clamp(28px, 4vw, 40px)', marginBottom: '16px' }}>secure your rate.<br />be first.</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '17px', marginBottom: '40px' }}>
          waitlist members get locked-in founder pricing before we open to everyone.
        </p>
        <WaitlistForm center />
        <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '16px', letterSpacing: '0.04em' }}>
          iOS · no credit card required · cancel anytime
        </p>
      </div>

      <Footer />
    </>
  )
}
