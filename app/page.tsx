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
  { title: 'audio-first', body: "built for your routine, not your screen time. designed to listen to on walks, during commutes, or with your morning coffee." },
  { title: 'it learns', body: 'the more you use wispr, the better it knows you. every conversation adds to its understanding. episodes get more resonant over time.' },
  { title: 'go off script', body: "not in the mood for your regular episode? ask wispr to explore anything on your mind — a specific challenge, a decision you're wrestling with, whatever needs space today." },
  { title: 'stories for you', body: "wispr weaves in stories from psychology, history, and human experience — chosen for what you're working through right now. not random. relevant to you." },
  { title: 'make it yours', body: "shape your host's personality and approach. warm and conversational or thoughtful and direct. challenge you or support you. wispr adapts to how you like to be coached." },
  { title: 'low friction', body: 'one minute check-in. ten minutes of clarity. the bar to showing up is low. the payoff is real.' },
  { title: 'private by design', body: "your check-ins, your reflections, your episodes — they stay yours. wispr is a judgement-free space to be honest about where you actually are." },
  { title: 'a companion, not a replacement', body: 'good human coaching starts at £100+ an hour. wispr is a fraction of that. not a substitute for human connection — a daily companion for every moment in between.' },
]

const testimonials = [
  { quote: "i've tried every journalling app. this is the first thing that actually feels like it knows what i need to hear. it's like having a coach in my pocket.", name: 'sarah t.', role: 'startup founder' },
  { quote: "the first episode made me cry a little. it got me so accurately. i don't know how it does it but i'm hooked.", name: 'james r.', role: 'product manager' },
  { quote: "i do 10 minutes every morning before the kids wake up. it's genuinely the best part of my day. i didn't expect to feel that way about an app.", name: 'emma k.', role: 'mum of two, freelance designer' },
]

// ─── Phone mockup components ──────────────────────────────────────────────────

function PhoneFrame({ width, height, children }: { width: number; height: number; children: React.ReactNode }) {
  const islandW = Math.round(width * 0.38)
  const islandH = Math.round(height * 0.05)
  return (
    <div style={{
      width, height,
      background: '#060E1B',
      borderRadius: 44,
      border: '2px solid rgba(255,255,255,0.13)',
      boxShadow: '0 0 0 6px rgba(0,0,0,0.28), 0 48px 80px rgba(0,0,0,0.55), 0 0 80px rgba(0,212,255,0.07)',
      position: 'relative',
      overflow: 'hidden',
      flexShrink: 0,
    }}>
      {/* Dynamic island */}
      <div style={{
        position: 'absolute', top: 13, left: '50%', transform: 'translateX(-50%)',
        width: islandW, height: islandH, background: '#020810', borderRadius: islandH / 2, zIndex: 2,
      }} />
      {children}
    </div>
  )
}

function HeroPhone() {
  return (
    <PhoneFrame width={252} height={516}>
      <div style={{ position: 'absolute', inset: 0, padding: '50px 18px 18px', display: 'flex', flexDirection: 'column' }}>
        {/* Status */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 16 }}>
          <span style={{ fontSize: 10, color: 'rgba(230,235,244,0.3)', fontWeight: 500, fontFamily: 'var(--font-body)' }}>9:41</span>
        </div>
        {/* Wordmark */}
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, color: 'var(--electric)', letterSpacing: '-0.02em', marginBottom: 20 }}>wispr</div>
        {/* Greeting */}
        <div style={{ fontSize: 11, color: 'rgba(230,235,244,0.38)', fontFamily: 'var(--font-body)', marginBottom: 4 }}>good morning, sarah</div>
        <div style={{ fontSize: 15, fontWeight: 600, color: '#E6EBF4', fontFamily: 'var(--font-body)', marginBottom: 20, lineHeight: 1.35 }}>your episode<br />is ready.</div>
        {/* Episode card */}
        <div style={{
          background: 'linear-gradient(135deg, #0F2A4A 0%, #163564 100%)',
          borderRadius: 16, padding: '16px',
          border: '1px solid rgba(0,212,255,0.22)',
          marginBottom: 'auto',
        }}>
          <div style={{ fontSize: 8, color: 'var(--amber)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 10, fontFamily: 'var(--font-body)', fontWeight: 500 }}>TODAY · 10 MIN</div>
          <div style={{ fontSize: 13, fontWeight: 600, color: '#E6EBF4', fontFamily: 'var(--font-body)', lineHeight: 1.35, marginBottom: 14 }}>navigating change<br />with clarity</div>
          <div style={{ background: 'var(--electric)', color: '#07111E', borderRadius: 20, padding: '6px 14px', fontSize: 11, fontWeight: 600, fontFamily: 'var(--font-body)', display: 'inline-block' }}>listen now →</div>
        </div>
        {/* Chapter bars */}
        <div style={{ display: 'flex', gap: 4, marginTop: 18, marginBottom: 16 }}>
          {[1, 2, 3].map(i => (
            <div key={i} style={{ height: 3, flex: 1, background: i === 1 ? 'rgba(0,212,255,0.7)' : 'rgba(230,235,244,0.08)', borderRadius: 2 }} />
          ))}
        </div>
        {/* Tab bar */}
        <div style={{ display: 'flex', justifyContent: 'space-around', paddingTop: 10, borderTop: '1px solid rgba(230,235,244,0.07)' }}>
          {[{ name: 'home', active: true }, { name: 'library', active: false }, { name: 'you', active: false }].map(tab => (
            <div key={tab.name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: tab.active ? 'var(--electric)' : 'transparent', boxShadow: tab.active ? '0 0 8px rgba(0,212,255,0.8)' : 'none' }} />
              <span style={{ fontSize: 8, color: tab.active ? 'var(--electric)' : 'rgba(230,235,244,0.22)', fontFamily: 'var(--font-body)' }}>{tab.name}</span>
            </div>
          ))}
        </div>
        {/* Home indicator */}
        <div style={{ width: 80, height: 3, background: 'rgba(255,255,255,0.18)', borderRadius: 2, margin: '10px auto 0' }} />
      </div>
    </PhoneFrame>
  )
}

function ChatPhone() {
  return (
    <PhoneFrame width={182} height={368}>
      <div style={{ position: 'absolute', inset: 0, padding: '38px 14px 14px', display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 10 }}>
          <span style={{ fontSize: 9, color: 'rgba(230,235,244,0.3)', fontFamily: 'var(--font-body)' }}>9:41</span>
        </div>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 16, color: 'var(--electric)', marginBottom: 18 }}>wispr</div>
        {/* Wispr message */}
        <div style={{ background: '#0F2A4A', borderRadius: '12px 12px 12px 4px', padding: '10px 12px', marginBottom: 8, maxWidth: '85%' }}>
          <p style={{ fontSize: 11, color: '#E6EBF4', fontFamily: 'var(--font-body)', lineHeight: 1.5, margin: 0 }}>how are you feeling today, sarah?</p>
        </div>
        {/* User reply */}
        <div style={{ background: 'rgba(0,212,255,0.12)', border: '1px solid rgba(0,212,255,0.2)', borderRadius: '12px 12px 4px 12px', padding: '10px 12px', marginBottom: 8, alignSelf: 'flex-end', maxWidth: '85%' }}>
          <p style={{ fontSize: 11, color: '#E6EBF4', fontFamily: 'var(--font-body)', lineHeight: 1.5, margin: 0 }}>pretty good, a bit scattered today</p>
        </div>
        {/* Wispr follow up */}
        <div style={{ background: '#0F2A4A', borderRadius: '12px 12px 12px 4px', padding: '10px 12px', marginBottom: 'auto', maxWidth: '85%' }}>
          <p style={{ fontSize: 11, color: '#E6EBF4', fontFamily: 'var(--font-body)', lineHeight: 1.5, margin: 0 }}>what would make today feel like a win?</p>
        </div>
        {/* Input */}
        <div style={{ background: '#0F2A4A', borderRadius: 20, padding: '8px 14px', border: '1px solid rgba(230,235,244,0.1)' }}>
          <span style={{ fontSize: 10, color: 'rgba(230,235,244,0.25)', fontFamily: 'var(--font-body)' }}>reply to wispr...</span>
        </div>
      </div>
    </PhoneFrame>
  )
}

function LoadingPhone() {
  return (
    <PhoneFrame width={182} height={368}>
      <div style={{ position: 'absolute', inset: 0, padding: '38px 14px 14px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%', marginBottom: 10 }}>
          <span style={{ fontSize: 9, color: 'rgba(230,235,244,0.3)', fontFamily: 'var(--font-body)' }}>9:41</span>
        </div>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 16, color: 'var(--electric)', marginBottom: 'auto', alignSelf: 'flex-start' }}>wispr</div>
        {/* Loading ring */}
        <div style={{ position: 'relative', width: 64, height: 64, marginBottom: 20 }}>
          <div style={{
            position: 'absolute', inset: 0, borderRadius: '50%',
            border: '3px solid rgba(0,212,255,0.1)',
          }} />
          <div style={{
            position: 'absolute', inset: 0, borderRadius: '50%',
            border: '3px solid transparent',
            borderTopColor: 'var(--electric)',
            animation: 'spinRing 1.4s linear infinite',
          }} />
          <div style={{
            position: 'absolute', inset: 8, borderRadius: '50%',
            border: '2px solid transparent',
            borderTopColor: 'rgba(196,151,106,0.6)',
            animation: 'spinRing 2.1s linear infinite reverse',
          }} />
        </div>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 14, color: '#E6EBF4', textAlign: 'center', marginBottom: 8 }}>crafting your<br />episode...</div>
        <div style={{ fontSize: 10, color: 'rgba(230,235,244,0.38)', fontFamily: 'var(--font-body)', textAlign: 'center', lineHeight: 1.6, marginBottom: 'auto' }}>reading your check-in<br />building your script</div>
        {/* Stage dots */}
        <div style={{ display: 'flex', gap: 6, marginBottom: 8 }}>
          {[1, 2, 3].map(i => (
            <div key={i} style={{ width: 6, height: 6, borderRadius: '50%', background: i === 1 ? 'var(--electric)' : i === 2 ? 'rgba(0,212,255,0.3)' : 'rgba(230,235,244,0.1)' }} />
          ))}
        </div>
      </div>
    </PhoneFrame>
  )
}

function PlayerPhone() {
  return (
    <PhoneFrame width={182} height={368}>
      <div style={{ position: 'absolute', inset: 0, padding: '38px 14px 14px', display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
          <span style={{ fontSize: 9, color: 'rgba(230,235,244,0.3)', fontFamily: 'var(--font-body)' }}>← back</span>
          <span style={{ fontSize: 9, color: 'rgba(230,235,244,0.3)', fontFamily: 'var(--font-body)' }}>9:41</span>
        </div>
        {/* Artwork */}
        <div style={{
          width: '100%', aspectRatio: '1/1',
          background: 'linear-gradient(135deg, #0F2A4A 0%, #163564 60%, rgba(0,212,255,0.15) 100%)',
          borderRadius: 12, marginBottom: 12,
          border: '1px solid rgba(0,212,255,0.15)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
        }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, color: 'rgba(0,212,255,0.25)' }}>w</div>
        </div>
        {/* Title */}
        <div style={{ fontSize: 11, fontWeight: 600, color: '#E6EBF4', fontFamily: 'var(--font-body)', marginBottom: 3, lineHeight: 1.3 }}>navigating change with clarity</div>
        <div style={{ fontSize: 9, color: 'var(--amber)', fontFamily: 'var(--font-body)', marginBottom: 12 }}>chapter 1 of 3</div>
        {/* Progress bar */}
        <div style={{ height: 3, background: 'rgba(230,235,244,0.1)', borderRadius: 2, marginBottom: 4, position: 'relative' }}>
          <div style={{ position: 'absolute', left: 0, top: 0, height: '100%', width: '38%', background: 'var(--electric)', borderRadius: 2 }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 14 }}>
          <span style={{ fontSize: 8, color: 'rgba(230,235,244,0.3)', fontFamily: 'var(--font-body)' }}>1:52</span>
          <span style={{ fontSize: 8, color: 'rgba(230,235,244,0.3)', fontFamily: 'var(--font-body)' }}>5:00</span>
        </div>
        {/* Controls */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 20, marginBottom: 'auto' }}>
          <span style={{ fontSize: 14, color: 'rgba(230,235,244,0.5)' }}>↺</span>
          <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--electric)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: 16, color: '#07111E', marginLeft: 2 }}>▮▮</span>
          </div>
          <span style={{ fontSize: 14, color: 'rgba(230,235,244,0.5)' }}>↻</span>
        </div>
      </div>
    </PhoneFrame>
  )
}

// ─── Floating dots ────────────────────────────────────────────────────────────

const HERO_DOTS = [
  { size: 8,  top: '9%',  left: '6%',   color: 'var(--electric)', delay: '0s',    dur: '4s'   },
  { size: 5,  top: '22%', right: '5%',  color: 'var(--amber)',    delay: '1.8s',  dur: '5.5s' },
  { size: 11, top: '56%', left: '3%',   color: 'var(--electric)', delay: '0.7s',  dur: '6s'   },
  { size: 6,  top: '76%', right: '9%',  color: 'var(--amber)',    delay: '2.3s',  dur: '4.5s' },
  { size: 9,  top: '40%', right: '-1%', color: 'var(--electric)', delay: '1.2s',  dur: '5s'   },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

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
        <div className="flex items-center gap-12 lg:gap-20">

          {/* Left: text + form */}
          <div style={{ flex: '1 1 0', minWidth: 0 }}>
            <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--amber)', marginBottom: '24px' }}>
              coming soon — join the waitlist
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

          {/* Right: phone + floating dots (desktop only) */}
          <div className="hidden lg:flex justify-center items-center shrink-0 relative" style={{ width: 340, height: 560 }}>
            {/* Soft ambient glow behind phone */}
            <div style={{
              position: 'absolute', inset: -48,
              background: 'radial-gradient(ellipse at center, rgba(0,212,255,0.10) 0%, transparent 68%)',
              pointerEvents: 'none',
            }} />
            {/* Floating dots */}
            {HERO_DOTS.map((d, i) => (
              <div key={i} style={{
                position: 'absolute',
                width: d.size, height: d.size,
                borderRadius: '50%',
                background: d.color,
                top: d.top, left: d.left, right: d.right,
                animation: `floatDot ${d.dur} ease-in-out ${d.delay} infinite`,
                pointerEvents: 'none',
              }} />
            ))}
            <HeroPhone />
          </div>

        </div>
      </section>

      {/* TRUST BAR */}
      <div style={{ background: 'var(--royal)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '28px 24px' }}>
        <div className="max-w-6xl mx-auto flex flex-wrap items-center gap-8">
          {['coming soon', 'iOS', 'join the waitlist'].map(item => (
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

      {/* APP SCREENS */}
      <section className="max-w-6xl mx-auto px-6 pb-24" style={{ position: 'relative', zIndex: 1 }}>
        <FadeUp>
          <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--amber)', marginBottom: '16px' }}>the app</p>
          <h2 className="font-display font-bold lowercase" style={{ fontSize: 'clamp(28px, 4vw, 40px)', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '56px' }}>
            see it in action
          </h2>
        </FadeUp>
        <div className="flex flex-col md:flex-row justify-center items-start gap-8 md:gap-6">

          {/* Check in */}
          <FadeUp delay={0} className="flex flex-col items-center">
            <div style={{ marginBottom: 24 }}><ChatPhone /></div>
            <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--amber)', textAlign: 'center', marginBottom: 6 }}>01 — check in</p>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', textAlign: 'center', maxWidth: 182, lineHeight: 1.6 }}>one minute conversation with wispr, every morning.</p>
          </FadeUp>

          {/* Arrow */}
          <div className="hidden md:flex items-center" style={{ paddingTop: 82, color: 'rgba(230,235,244,0.2)', fontSize: 24 }}>→</div>

          {/* Generating */}
          <FadeUp delay={0.1} className="flex flex-col items-center">
            <div style={{ marginBottom: 24 }}><LoadingPhone /></div>
            <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--amber)', textAlign: 'center', marginBottom: 6 }}>02 — crafted for you</p>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', textAlign: 'center', maxWidth: 182, lineHeight: 1.6 }}>wispr writes and voices an episode just for today.</p>
          </FadeUp>

          {/* Arrow */}
          <div className="hidden md:flex items-center" style={{ paddingTop: 82, color: 'rgba(230,235,244,0.2)', fontSize: 24 }}>→</div>

          {/* Player */}
          <FadeUp delay={0.2} className="flex flex-col items-center">
            <div style={{ marginBottom: 24 }}><PlayerPhone /></div>
            <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--amber)', textAlign: 'center', marginBottom: 6 }}>03 — listen & grow</p>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', textAlign: 'center', maxWidth: 182, lineHeight: 1.6 }}>5, 10, or 15 minutes. your commute, your walk, your morning.</p>
          </FadeUp>

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

      {/* SUPPLEMENT / EMOTIONAL CALLOUT */}
      <section style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', position: 'relative', zIndex: 1 }}>
        <div className="max-w-4xl mx-auto px-6 py-24">
          <FadeUp>
            <div style={{ borderLeft: '3px solid var(--amber)', paddingLeft: '32px' }}>
              <h2 className="font-display font-bold lowercase" style={{ fontSize: 'clamp(28px, 4vw, 44px)', lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: '32px', color: 'var(--text-primary)' }}>
                wispr doesn't replace human coaching.<br />it shows up when nothing else can.
              </h2>
              <p style={{ fontSize: '17px', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '20px', maxWidth: '640px' }}>
                the moments that shape us aren't always scheduled. they happen in the quiet before everyone wakes up. on the commute when your mind won't settle. late at night when you feel unseen, unheard, and there's no one to call.
              </p>
              <p style={{ fontSize: '17px', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '20px', maxWidth: '640px' }}>
                and some things — the biggest dreams, the deepest doubts — we don't say out loud. not to a partner, not to a friend. not yet. maybe not ever. wispr is the space where you can.
              </p>
              <p style={{ fontSize: '17px', color: 'var(--text-secondary)', lineHeight: 1.8, maxWidth: '640px' }}>
                good human coaching starts at £100+ an hour and demands a booking. wispr is there every day, in your pocket, for a fraction of the cost — and it never judges what you bring to it.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-6xl mx-auto px-6 py-24" style={{ position: 'relative', zIndex: 1 }}>
        <FadeUp><p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--amber)', marginBottom: '16px' }}>in their words</p></FadeUp>
        <FadeUp delay={0.05}>
          <h2 className="font-display font-bold lowercase" style={{ fontSize: 'clamp(32px, 5vw, 48px)', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '56px' }}>
            what people are saying
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
          <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--amber)', marginBottom: '16px' }}>from £5 a month</p>
          <h2 className="font-display font-bold lowercase" style={{ fontSize: 'clamp(28px, 4vw, 44px)', marginBottom: '16px' }}>daily coaching for less<br />than a coffee a week</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '17px', margin: '0 auto 32px', maxWidth: '480px' }}>
            human coaching at £100+ an hour is out of reach for most people. wispr brings something genuinely personal to every day — at a price that makes sense. 7 days free on any plan.
          </p>
          <a
            href="/pricing"
            style={{
              border: '1px solid rgba(0,212,255,0.35)',
              color: 'var(--electric)',
              background: 'transparent',
              borderRadius: '9999px',
              padding: '13px 28px',
              fontSize: '15px',
              fontWeight: 600,
              textDecoration: 'none',
              display: 'inline-block',
              transition: 'opacity 0.15s',
            }}
          >
            see full pricing →
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
        <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--amber)', marginBottom: '16px' }}>join the waitlist</p>
        <h2 className="font-display font-bold lowercase" style={{ fontSize: 'clamp(32px, 5vw, 48px)', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '16px' }}>
          always there.<br />always learning.<br />always yours.
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '17px', marginBottom: '40px' }}>
          wispr is launching soon. join the waitlist and be first in.
        </p>
        <WaitlistForm center />
        <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '16px', letterSpacing: '0.04em' }}>
          iOS · coming soon · no credit card required
        </p>
      </div>

      <Footer />
    </>
  )
}
