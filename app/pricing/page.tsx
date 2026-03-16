'use client'

import { useState } from 'react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import WaitlistForm from '@/components/WaitlistForm'
import FadeUp from '@/components/FadeUp'

type BillingCycle = 'monthly' | 'annual'

const tiers = [
  {
    id: 'daily',
    name: 'daily',
    monthlyPrice: '£7.99',
    annualPrice: '£59.99',
    annualMonthly: '£5.00',
    highlight: false,
    badge: null,
    cta: 'join waitlist',
    ctaNote: '7 days free · cancel anytime',
    features: [
      { label: 'episode length', value: '10 min' },
      { label: 'episodes per day', value: '1' },
      { label: 'voice selection', value: '2 voices' },
      { label: 'go off script', value: 'preview' },
      { label: 'tell me more', value: '✓' },
      { label: 'stories', value: 'preview' },
      { label: 'share cards', value: '✓' },
      { label: 'email recap', value: 'basic' },
      { label: 'web access', value: 'check-in' },
    ],
  },
  {
    id: 'pro',
    name: 'pro',
    monthlyPrice: '£14.99',
    annualPrice: '£99.99',
    annualMonthly: '£8.33',
    highlight: true,
    badge: 'most popular',
    cta: 'join waitlist',
    ctaNote: null,
    features: [
      { label: 'episode length', value: '15 min' },
      { label: 'episodes per day', value: '2' },
      { label: 'voice selection', value: '4 voices' },
      { label: 'go off script', value: '✓' },
      { label: 'tell me more', value: '✓' },
      { label: 'stories', value: '✓' },
      { label: 'share cards', value: '✓' },
      { label: 'email recap', value: '+ chapters' },
      { label: 'web access', value: 'check-in' },
    ],
  },
  {
    id: 'proplus',
    name: 'pro+',
    monthlyPrice: '£19.99',
    annualPrice: '£143.99',
    annualMonthly: '£12.00',
    highlight: false,
    badge: null,
    cta: 'join waitlist',
    ctaNote: null,
    features: [
      { label: 'episode length', value: '20 min' },
      { label: 'episodes per day', value: '3' },
      { label: 'voice selection', value: '4 voices' },
      { label: 'go off script', value: '✓' },
      { label: 'tell me more', value: '✓' },
      { label: 'stories', value: '✓' },
      { label: 'share cards', value: '✓' },
      { label: 'email recap', value: 'deep dive' },
      { label: 'web access', value: 'dashboard' },
    ],
  },
]

const faqItems = [
  { q: 'is there a free trial?', a: 'yes — 7 days of full access on the daily plan, no credit card required. you get the complete wispr experience from day one.' },
  { q: 'what happens after the trial?', a: 'after 7 days you can subscribe to keep going. pricing will be confirmed at launch.' },
  { q: 'can i switch plans?', a: 'yes. you can upgrade or downgrade anytime. changes take effect at the start of your next billing period.' },
  { q: "what's the difference between monthly and annual?", a: 'annual billing saves you up to 40% compared to monthly. the price is billed as a single payment once a year.' },
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
          <div style={{ maxHeight: open === i ? '200px' : '0', overflow: 'hidden', transition: 'max-height 0.3s ease' }}>
            <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.7, paddingBottom: '20px' }}>{item.a}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function Pricing() {
  const [billing, setBilling] = useState<BillingCycle>('annual')

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
            choose wispr
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '18px', margin: '0 auto 40px', maxWidth: '440px' }}>
            daily coaching, built around you. 7 days free on any plan.
          </p>

          {/* Billing toggle */}
          <div className="inline-flex items-center" style={{ background: 'var(--royal)', borderRadius: '9999px', padding: '4px', gap: '4px' }}>
            {(['monthly', 'annual'] as BillingCycle[]).map((cycle) => (
              <button
                key={cycle}
                onClick={() => setBilling(cycle)}
                style={{
                  padding: '8px 20px',
                  borderRadius: '9999px',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: 500,
                  fontFamily: 'var(--font-body)',
                  background: billing === cycle ? 'var(--electric)' : 'transparent',
                  color: billing === cycle ? 'var(--ink)' : 'var(--text-secondary)',
                  transition: 'all 0.2s',
                }}
              >
                {cycle}
              </button>
            ))}
          </div>
          {billing === 'annual' && (
            <p style={{ fontSize: '13px', color: 'var(--success, #34D399)', marginTop: '10px' }}>save up to 40% with annual billing</p>
          )}
        </FadeUp>
      </section>

      {/* PRICING CARDS */}
      <section className="max-w-6xl mx-auto px-6 pb-16" style={{ position: 'relative', zIndex: 1 }}>
        <div className="grid md:grid-cols-3 gap-4">
          {tiers.map((tier, i) => (
            <FadeUp key={tier.id} delay={i * 0.08}>
              <div
                style={{
                  background: tier.highlight ? 'var(--surface-high, #163564)' : 'var(--royal)',
                  border: tier.highlight ? '1px solid rgba(0,212,255,0.3)' : '1px solid var(--border)',
                  borderRadius: '22px',
                  padding: '40px',
                  position: 'relative',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: tier.highlight ? '0 0 32px rgba(0,212,255,0.12)' : undefined,
                }}
              >
                {tier.badge && (
                  <div style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', background: 'var(--electric)', color: 'var(--ink)', fontSize: '11px', fontWeight: 600, padding: '4px 16px', borderRadius: '9999px', letterSpacing: '0.04em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
                    {tier.badge}
                  </div>
                )}

                <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: tier.highlight ? 'var(--electric)' : 'var(--amber)', marginBottom: '12px', marginTop: tier.badge ? '8px' : '0' }}>{tier.name}</p>

                <div className="flex items-baseline gap-1" style={{ marginBottom: '4px' }}>
                  <span className="font-display font-bold" style={{ fontSize: '42px', color: 'var(--text-primary)', lineHeight: 1 }}>
                    {billing === 'annual' ? tier.annualMonthly : tier.monthlyPrice}
                  </span>
                  <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>/month</span>
                </div>

                {billing === 'annual' ? (
                  <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '24px' }}>billed {tier.annualPrice}/year</p>
                ) : (
                  <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '24px' }}>billed monthly</p>
                )}

                <a
                  href="/#waitlist"
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    background: tier.highlight ? 'var(--electric)' : 'transparent',
                    color: tier.highlight ? 'var(--ink)' : 'var(--electric)',
                    border: tier.highlight ? 'none' : '1px solid rgba(0,212,255,0.3)',
                    borderRadius: '9999px',
                    padding: '14px 28px',
                    fontSize: '15px',
                    fontWeight: 600,
                    textDecoration: 'none',
                    transition: 'opacity 0.15s',
                    marginBottom: tier.ctaNote ? '8px' : '24px',
                  }}
                >
                  {tier.cta} →
                </a>
                {tier.ctaNote && (
                  <p style={{ fontSize: '12px', color: 'var(--text-muted)', textAlign: 'center', marginBottom: '24px' }}>{tier.ctaNote}</p>
                )}

                <div style={{ height: '1px', background: 'var(--border)', marginBottom: '24px' }} />

                <div style={{ flex: 1 }}>
                  {tier.features.map((f) => (
                    <div key={f.label} className="flex justify-between items-center" style={{ padding: '7px 0', borderBottom: '1px solid rgba(230,235,244,0.05)' }}>
                      <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>{f.label}</span>
                      <span style={{ fontSize: '13px', color: f.value === '✓' ? 'var(--success, #34D399)' : f.value === 'preview' ? 'var(--amber)' : 'var(--text-primary)', fontWeight: 500 }}>{f.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        <p className="text-center" style={{ color: 'var(--text-muted)', fontSize: '13px', marginTop: '24px' }}>
          all prices in GBP. pricing will be confirmed at launch.
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
        <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--amber)', marginBottom: '16px' }}>join the waitlist</p>
        <h2 className="font-display font-bold lowercase" style={{ fontSize: 'clamp(28px, 4vw, 40px)', marginBottom: '16px' }}>be first to know<br />when wispr launches.</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '17px', marginBottom: '40px' }}>
          sign up and we'll let you know as soon as wispr is ready.
        </p>
        <WaitlistForm center />
        <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '16px', letterSpacing: '0.04em' }}>
          iOS · 7 days free · cancel anytime
        </p>
      </div>

      <Footer />
    </>
  )
}
