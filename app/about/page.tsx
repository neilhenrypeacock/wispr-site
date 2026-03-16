import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import WaitlistForm from '@/components/WaitlistForm'
import FadeUp from '@/components/FadeUp'

const beliefs = [
  {
    title: 'coaching should be daily, not weekly',
    body: "growth doesn't happen in 60-minute slots once a week. it happens in the everyday moments — the morning you almost gave up, the afternoon you lost focus, the evening you couldn't see the bigger picture.",
  },
  {
    title: "personalisation isn't a feature. it's the point.",
    body: 'generic advice is almost useless. what moves you is specific to you — your history, your language, your patterns. the best coaching meets you exactly where you are.',
  },
  {
    title: 'audio is the right medium for reflection',
    body: "you don't need another screen to stare at. you need something you can absorb while you walk, drive, or make coffee. audio creates space. screens create distraction.",
  },
  {
    title: 'honesty builds trust. trust builds change.',
    body: "wispr works because you can be completely honest with it. no judgement. no performance. just you and a space to figure out what's actually going on.",
  },
]

export default function About() {
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
      <section className="max-w-3xl mx-auto px-6 pt-36 pb-16" style={{ position: 'relative', zIndex: 1 }}>
        <FadeUp>
          <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--amber)', marginBottom: '24px' }}>our story</p>
          <h1 className="font-display font-bold lowercase" style={{ fontSize: 'clamp(36px, 5vw, 60px)', lineHeight: 1.05, letterSpacing: '-0.03em', marginBottom: '40px' }}>
            built for the person who's always growing
          </h1>
        </FadeUp>
        <FadeUp delay={0.1}>
          <div style={{ maxWidth: '680px' }}>
            <p style={{ fontSize: '17px', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '24px' }}>
              most people who want to grow can't afford a coach. and even if they could, they can't commit to a weekly session while life is happening around them. so they listen to podcasts, read books, download apps — all of which talk at them, not to them.
            </p>
            <p style={{ fontSize: '17px', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '24px' }}>
              wispr started from a simple belief: that the kind of reflection that actually changes you doesn't come from generic advice. it comes from someone who knows you — your goals, your blockers, the way you think, where you're at today.
            </p>
            <p style={{ fontSize: '17px', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              we built wispr to be that. a coaching companion that gets more personal over time. that shows up every day. that makes five minutes in the morning feel like the most useful thing you did all week.
            </p>
          </div>
        </FadeUp>
      </section>

      {/* BELIEF */}
      <section className="max-w-6xl mx-auto px-6 pb-24" style={{ position: 'relative', zIndex: 1 }}>
        <FadeUp>
          <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--amber)', marginBottom: '40px' }}>the belief</p>
        </FadeUp>
        <div className="grid md:grid-cols-2 gap-4">
          {beliefs.map((b, i) => (
            <FadeUp key={b.title} delay={i * 0.08}>
              <div style={{ padding: '32px', borderTop: '2px solid var(--electric)', height: '100%' }}>
                <h3 className="font-display font-bold lowercase" style={{ fontSize: '20px', color: 'var(--text-primary)', marginBottom: '12px' }}>{b.title}</h3>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>{b.body}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS DEEP */}
      <section className="max-w-3xl mx-auto px-6 pb-24" style={{ borderTop: '1px solid var(--border)', position: 'relative', zIndex: 1, paddingTop: '64px' }}>
        <FadeUp>
          <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--amber)', marginBottom: '16px' }}>the experience</p>
          <h2 className="font-display font-bold lowercase" style={{ fontSize: 'clamp(28px, 4vw, 40px)', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '40px' }}>how wispr works</h2>
        </FadeUp>
        {[
          {
            label: 'onboarding',
            body: 'your first conversation with wispr. it asks about your life, your goals, what gets in your way, and how you prefer to be coached. this takes about ten minutes and becomes the foundation of every episode you\'ll ever hear.',
          },
          {
            label: 'daily check-in',
            body: 'each day, wispr opens with a short conversation. it asks about your mood, your energy, what\'s on your mind. this takes about a minute. it\'s also how wispr gets smarter — every check-in adds nuance to its picture of you.',
          },
          {
            label: 'your episode',
            body: 'wispr generates a personalised coaching episode — 5, 10, or 15 minutes, your choice. voiced by a calm AI voice, written specifically for where you are today. designed to listen to during your morning walk, your commute, or your quiet moment before the day starts.',
          },
        ].map((item, i) => (
          <FadeUp key={item.label} delay={i * 0.08}>
            <div style={{ padding: '32px 0', borderBottom: i < 2 ? '1px solid var(--border)' : undefined }}>
              <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--amber)', marginBottom: '8px' }}>{item.label}</p>
              <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>{item.body}</p>
            </div>
          </FadeUp>
        ))}
      </section>

      {/* TECH */}
      <section className="max-w-3xl mx-auto px-6 pb-24" style={{ borderTop: '1px solid var(--border)', position: 'relative', zIndex: 1, paddingTop: '64px' }}>
        <FadeUp>
          <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--amber)', marginBottom: '16px' }}>the tech</p>
          <h2 className="font-display font-bold lowercase" style={{ fontSize: '28px', letterSpacing: '-0.01em', marginBottom: '24px' }}>honest about how it works</h2>
          <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '16px' }}>
            wispr is powered by AI. we don't think that's something to hide — it's what makes it possible to generate something genuinely personalised for you, every day, at a cost that's accessible.
          </p>
          <div style={{ background: 'var(--royal)', borderLeft: '3px solid var(--amber)', borderRadius: '0 12px 12px 0', padding: '20px 24px', fontStyle: 'italic', fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.7, margin: '24px 0' }}>
            wispr uses Claude (by Anthropic) to generate your episodes. the coaching is real. the personalisation is real. the voice is AI.
          </div>
          <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '16px' }}>
            we chose Claude because it's one of the most thoughtful, honest AI systems available. it's built by a company focused on making AI that's safe and beneficial.
          </p>
          <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
            the AI is the engine. the coaching is the point.
          </p>
        </FadeUp>
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
        <h2 className="font-display font-bold lowercase" style={{ fontSize: 'clamp(28px, 4vw, 40px)', marginBottom: '16px' }}>be first to know when wispr launches.</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '17px', marginBottom: '40px' }}>sign up and we'll let you know as soon as wispr is ready.</p>
        <WaitlistForm center />
      </div>

      <Footer />
    </>
  )
}
