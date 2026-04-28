# Burak Öztürk Personal Website

Next.js app-router portfolio site for Burak Öztürk, focused on performance
marketing, product growth, consulting credibility, and recruiter-ready work
history.

## Stack

- Next.js 16, React 19, TypeScript
- Tailwind CSS 4 with dark mode
- shadcn-style local UI primitives in `components/ui`
- Lucide React icons
- Framer Motion micro-animations
- MDX blog support with `@next/mdx`
- Recharts case-study metric snapshots
- Nodemailer-backed contact API route

## Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Environment Variables

Copy `.env.example` to `.env.local` and fill in values as needed.

```bash
NEXT_PUBLIC_GA_ID=
SMTP_HOST=
SMTP_PORT=587
SMTP_USER=
SMTP_PASS=
CONTACT_TO_EMAIL=burakozturkmee@gmail.com
```

If SMTP variables are not set, `/api/contact` validates submissions and logs
them locally instead of sending email.

## Content

- Case studies and core site content live in `lib/data.ts`.
- Blog posts live in `content/blog/*.mdx` and are registered in
  `content/blog/posts.ts`.
- The CV download is served from
  `public/BurakOzturk_Resume_CV_2026.pdf`.
- Replace `public/headshot-placeholder.svg` with a real professional headshot
  when available.

## Useful Commands

```bash
npm run lint
npm run build
npm run start
```

## Deployment

The project is ready for Vercel. Add the environment variables in the Vercel
dashboard, then deploy the repository. `vercel.json` declares the Next.js
framework explicitly.
