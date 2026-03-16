import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { email, name } = await req.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'invalid email' }, { status: 400 })
    }

    // Log to console for now — wire up Supabase or Resend here later
    console.log(`[waitlist] new signup: ${name ? name + ' ' : ''}<${email}>`)

    // TODO: uncomment to save to Supabase
    // const { error } = await supabase.from('waitlist').insert({ email, name, created_at: new Date().toISOString() })
    // if (error) throw error

    // TODO: uncomment to send via Resend
    // await resend.emails.send({ from: 'wispr <hello@wispr.app>', to: email, subject: 'you're on the list', ... })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[waitlist] error:', err)
    return NextResponse.json({ error: 'internal error' }, { status: 500 })
  }
}
