# wispr — marketing website

Next.js marketing site for wispr.

## stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion (ready to use)
- Vercel (deployment)

## local dev

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## deploy to vercel

1. Push this folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import the GitHub repo
4. Click Deploy — no env vars needed yet

## adding email capture

The waitlist form POSTs to `/api/waitlist`. Currently just logs to console.

To wire up Supabase, add to `.env.local`:
```
SUPABASE_URL=your_url
SUPABASE_SERVICE_KEY=your_service_key
```

Then uncomment the Supabase block in `app/api/waitlist/route.ts`.

## pages

- `/` — home (hero, how it works, features, testimonials, waitlist CTA)
- `/about` — story, belief manifesto, tech disclosure
- `/pricing` — two pricing cards, FAQ, waitlist CTA
