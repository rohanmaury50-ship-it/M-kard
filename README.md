# M-kard — Next.js shopping app (MVP)

This repository contains a starter Next.js + Tailwind + Prisma (SQLite) shopping app scaffolded for you.

Quick start

1. Install dependencies

   npm install

2. Generate Prisma client and create the SQLite database

   npx prisma generate
   npx prisma migrate dev --name init --preview-feature

3. Seed sample products

   npm run prisma:seed

4. Run the dev server

   npm run dev

Open http://localhost:3000

Notes
- This is an MVP scaffold: NextAuth, Stripe and PostgreSQL can be added later. For quick local development Prisma uses SQLite (dev.db).
- Environment variables: create a .env file if you add DATABASE_URL, STRIPE keys, etc.
