# 🌆 Fem Barri – Local Business Support Web App

**Fem Barri** is a **mobile-first web app** built with **Next.js** (App Router, TypeScript) designed to promote and support small local businesses in my neighborhood.

This project was designed in **Figma** and developed with a focus on performance, accessibility, and modern SSR patterns.

---

## ✨ Features

- ✅ Server-Side Rendering (SSR) with mocked or real API routes
- ✅ Designed for mobile-first experience
- ✅ Built with the latest **Next.js 15 App Router**
- ✅ Typed with **TypeScript**
- ✅ Structured with modular components and clean API structure
- ✅ Hosted and deployed on **Vercel**

---

## 🚀 Deployment

This project is deployed on **Vercel** using two separate branches for clarity:

| Branch        | Description                                                             |
|---------------|-------------------------------------------------------------------------|
| `main`        | Uses **mocked data** from a local `data.json` file via API routes       |
| `migration`   | Uses full **SSR with `/api` routes**, intended for real deployment flow |

> ✅ Both branches support **SSR**, but `main` uses file-based mocks to simplify testing and previewing without a backend.

---

## 🛠️ Tech Stack

- [Next.js 15](https://nextjs.org/) – App Router + SSR
- [TypeScript](https://www.typescriptlang.org/)
- [Figma](https://figma.com/) – UI Design
- [Vercel](https://vercel.com/) – Deployment
- CSS Modules or Tailwind (depending on your styling setup)

---

## 📁 Project Structure (Simplified)

````
├── app/ # App Router pages & layout
│ └── locals/ # Dynamic routes for local business pages
├── components/ # UI components and client components
├── lib/
│ └── api/ # Data fetching (SSR-safe, modular)
├── mocks/
│ └── data.json # Mocked dataset used in main branch
├── public/
├── styles/
└── README.md
`````

---

## 🔄 Switching Between SSR Modes

Depending on which branch you're working on:

- In `main`:
  - Data is served via `GET` handlers under `/api/`, backed by `mocks/data.json`.
  - This allows full SSR without a real database.
- In `migration`:
  - Real API endpoints or future database integration can replace mock logic.
  - Keeps SSR working exactly the same, just pulling real data.

---

## 🧪 Running Locally

```bash
# Install dependencies
npm install

# Run in development
npm run dev

````

## 🧪 Running Locally


- Integrate a real CMS or database (e.g., Sanity, Supabase)

- Integrate a QR system to share links to locals or stores inside the stores

- Add internationalization (i18n)

- Improve SEO and structured data for business listings