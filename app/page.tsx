import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import WaitlistForm from '@/components/WaitlistForm'
import FadeUp from '@/components/FadeUp'

const steps = [
  {
    num: '01',
    title: 'tell wispr about you',
    body: 'a short conversation about your life, goals, and how you like to be coached. this becomes the foundation of everything.',
    icon: (
      <svg className="w-10 h-10" style={{ color: 'var(--electric)' }} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'check in each day',
    body: "one minute. wispr asks how you're feeling, what's on your mind, what you need today. that's your episode brief.",
    icon: (
      <svg className="w-10 h-10" style={{ color: 'var(--electric)' }} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'listen to your episode',
    body: 'a 5, 10, or 15-minute coaching episode voiced just for you. made for your walk, your commute, your morning routine.',
    icon: (
      <svg className="w-10 h-10" style={{ color: 'var(--electric)' }} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

const features = [
  { title: 'truly personalised', body: 'every episode is generated for you specifically — not a template with your name dropped in. wispr knows your goals, your blocks, your way of thinking.' },
  { title: 'audio-first', body: 'built for your routine, not your screen time. designed to listen to on walks, during commutes, or with your morning coffee.' },
  { title: 'it learns', body: 'the more you use wispr, the better it knows you. every conversation adds to its understanding. episodes get more resonant over time.' },
  { title: 'low friction', body: 'one minute check-in. ten minutes of clarity. the bar to showing up is low. the payoff is real.' },
  { title: 'private by design', body: 'your check-ins, your reflections, your episodes — they stay yours. wispr is a judgement-free space to be honest about where you actually are.' },
  { title: 'affordable coaching', body: "a human coach starts at £70 an hour. wispr is a fraction of that — and it's available every single day, without booking ahead." },
]

const testimonials = [
  { quote: "i've tried every journalling app. this is the first thing that actually feels like it knows what i need to hear. it's like having a coach in my pocket.", name: 'sarah t.', role: 'startup founder' },
  { quote: "the first episode made me cry a little. it got me so accurately. i don't know how it does it but i'm hooked.", name: 'james r.', role: 'product manager' },
  { quote: "i do 10 minutes every morning before the kids wake up. it's genuinely the best part of my day. i didn't expect to feel that way about an app.", name: 'emma k.', role: 'mum of two, freelance designer' },
]

export default function Home() {
  return (
    <>
      <Nav />

      {/* Ambient background */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 65% 20%, rgba(0,212,255,0.07) 0%, transparent 55%), radial-gradient(ellipse at 15% 85%, rgba(196,151,106,0.05) 0%, transparent 50%)',
          zIndex: 0,
        }}
      />

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-center pt-24 pb-24 px-6 max-w-6xl mx-auto" style={{ zIndex: 1 }}>
        <div className="max-w-2xl">
          <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--amber)', marginBottom: '24px' }}>
            early access — join the waitlist
          </p>
          <h1
            className="font-display font-bold lowercase"
            style={{ fontSize: 'clamp(48px, 7vw, 80px)', lineHeight: 1.05, letterSpacing: '-0.03em', color: 'var(--text-primary)', marginBottom: '24px' }}
          >
            your coach.<br />your episode.<br />every day.
          </h1>
          <p style={{ fontSize: '18px', color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '520px', marginBottom: '40px' }}>
            a personalised audio coaching episode, made just for you, every morning. it learns who you are. it gets better the more you talk.
          </p>
          <WaitlistForm />
        </div>
      </section>

      {/* TRUST BAR */}
      <div style={{ background: 'var(--royal)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '28px 24px' }}>
        <div className="max-w-6xl mx-auto flex flex-wrap items-center gap-8">
          {['private beta', 'iOS only', 'early access open'].map(item => (
            <div key={item} className="flex items-center gap-2" style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--electric)', display: 'inline-block', flexShrink: 0 }} />
              {item}
            </div>
          ))}
          <p className="flex-1 min-w-64" style={{ fontSize: '14px', color: 'var(--text-secondary)', fontStyle: 'italic', paddingLeft: '20px', borderLeft: '2px solid var(--amber)' }}>
            "finally something that talks to me, not at me."
          </p>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <section className="max-w-6xl mx-auto px-6 py-24" style={{ position: 'relative', zIndex: 1 }}>
        <FadeUp><p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--amber)', marginBottom: '16px' }}>how it works</p></FadeUp>
        <FadeUp delay={0.05}>
          <h2 className="font-display font-bold lowercase" style={{ fontSize: 'clamp(32px, 5vw, 48px)', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '56px' }}>
            three steps. ten minutes.<br />a clearer day.
          </h2>
        </FadeUp>
        <div className="grid md:grid-cols-3 gap-0.5">
          {steps.map((step, i) => (
            <FadeUp key={step.num} delay={i * 0.1}>
              <div
                style={{
                  background: 'var(--royal)',
                  padding: '40px',
                  borderRadius: i === 0 ? '16px 0 0 16px' : i === steps.length - 1 ? '0 16px 16px 0' : '0',
                  height: '100%',
                }}
              >
                <div className="font-display font-bold" style={{ fontSize: '64px', color: 'rgba(0,212,255,0.12)', lineHeight: 1, marginBottom: '24px' }}>{step.num}</div>
                <div style={{ marginBottom: '20px' }}>{step.icon}</div>
                <h3 className="font-display font-bold lowercase" style={{ fontSize: '20px', color: 'var(--text-primary)', marginBottom: '8px' }}>{step.title}</h3>
                <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{step.body}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-6xl mx-auto px-6 pb-24" style={{ position: 'relative', zIndex: 1 }}>
        <FadeUp><p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--amber)', marginBottom: '16px' }}>why it's different</p></FadeUp>
        <FadeUp delay={0.05}>
          <h2 className="font-display font-bold lowercase" style={{ fontSize: 'clamp(32px, 5vw, 48px)', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '56px' }}>
            not a podcast.<br />not a template. yours.
          </h2>
        </FadeUp>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <FadeUp key={f.title} delay={i * 0.05}>
              <div
                style={{
                  background: 'linear-gradient(135deg, var(--royal) 0%, var(--ink) 100%)',
                  border: '1px solid var(--border)',
                  borderRadius: '16px',
                  padding: '32px',
                  height: '100%',
                  transition: 'border-color 0.2s',
                }}
              >
                <h3 className="font-display font-bold lowercase" style={{ fontSize: '18px', color: 'var(--text-primary)', marginBottom: '8px' }}>{f.title}</h3>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{f.body}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-6xl mx-auto px-6 pb-24" style={{ position: 'relative', zIndex: 1 }}>
        <FadeUp><p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--amber)', marginBottom: '16px' }}>early access voices</p></FadeUp>
        <FadeUp delay={0.05}>
          <h2 className="font-display font-bold lowercase" style={{ fontSize: 'clamp(32px, 5vw, 48px)', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '56px' }}>
            what beta users are saying
          </h2>
        </FadeUp>
        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <FadeUp key={t.name} delay={i * 0.1}>
              <div style={{ background: 'var(--royal)', borderRadius: '16px', padding: '32px', position: 'relative', height: '100%' }}>
                <div className="font-display font-bold" style={{ fontSize: '80px', color: 'rgba(0,212,255,0.12)', position: 'absolute', top: '12px', left: '24px', lineHeight: 1 }}>"</div>
                <p style={{ fontSize: '16px', color: 'var(--text-primary)', lineHeight: 1.6, marginBottom: '20px', position: 'relative', zIndex: 1 }}>{t.quote}</p>
                <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                  <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{t.name}</span> · {t.role}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* PRICING TEASER */}
      <FadeUp>
        <div className="text-center px-6 py-24" style={{ position: 'relative', zIndex: 1 }}>
          <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--amber)', marginBottom: '16px' }}>pricing</p>
          <h2 className="font-display font-bold lowercase" style={{ fontSize: 'clamp(32px, 5vw, 48px)', marginBottom: '16px' }}>simple pricing,<br />coming soon</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '17px', margin: '0 auto 32px', maxWidth: '400px' }}>
            early access members get locked-in founder pricing. join the waitlist to secure your rate.
          </p>
          <a
            href="/pricing"
            style={{
              background: 'var(--electric)',
              color: 'var(--ink)',
              borderRadius: '9999px',
              padding: '14px 28px',
              fontSize: '15px',
              fontWeight: 600,
              textDecoration: 'none',
              display: 'inline-block',
              transition: 'opacity 0.15s',
            }}
          >
            see pricing →
          </a>
        </div>
      </FadeUp>

      {/* FINAL CTA */}
      <div
        id="waitlist"
        className="text-center px-6 py-24"
        style={{
          background: 'linear-gradient(135deg, var(--royal) 0%, rgba(22,53,100,0.5) 100%)',
          borderTop: '1px solid var(--border)',
          borderBottom: '1px solid var(--border)',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--amber)', marginBottom: '16px' }}>get started</p>
        <h2 className="font-display font-bold lowercase" style={{ fontSize: 'clamp(32px, 5vw, 48px)', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '16px' }}>
          your coach.<br />your episode.<br />every day.
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '17px', marginBottom: '40px' }}>
          join the waitlist and be first when wispr opens up.
        </p>
        <WaitlistForm center />
        <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '16px', letterSpacing: '0.04em' }}>
          iOS · early access · no credit card required
        </p>
      </div>

      <Footer />
    </>
  )
}
