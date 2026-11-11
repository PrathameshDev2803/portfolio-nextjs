# Prathamesh Jadhav — Developer Portfolio

[![Live Site](https://img.shields.io/badge/Live_Site-prathameshjadhav.com-171717?style=for-the-badge&logo=vercel&logoColor=white)](https://prathameshjadhav.com)
[![Next.js](https://img.shields.io/badge/Next.js_16-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org)
[![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)

A modern, minimal, monochrome editorial portfolio for **Prathamesh Jadhav** — Full Stack Developer based in Mumbai, India.

🔗 **Live Website**: [prathameshjadhav.com](https://prathameshjadhav.com)

---

## ✨ Features

- **Monochrome Editorial Aesthetic**: Warm neutral palette, refined typography, and purposeful whitespace.
- **Full Responsiveness**: Adaptive layouts optimized for mobile (320px+), tablet, and desktop viewports with zero horizontal overflow.
- **Dynamic Contact API**: Serverless Next.js API route (`/api/contact`) powered by [Resend](https://resend.com) featuring:
  - In-memory sliding-window IP rate limiting
  - Server-side email and string validation
  - Honeypot bot trap to block automated spam
  - Duplicate submission cooldown protection
- **Built-in SEO & Discovery**:
  - OpenGraph & Twitter Card metadata in `layout.tsx`
  - Dynamic XML Sitemap (`/sitemap.xml`)
  - Configured `robots.txt` (`/robots.txt`)
  - Google Search Console & Bing Webmaster Tools verified
- **Live Version Sync**: Client-side version polling component (`AutoUpdate.tsx`) that detects new production deployments seamlessly.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org) (App Router)
- **Library**: [React 19](https://react.dev)
- **Language**: [TypeScript](https://www.typescriptlang.org)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com) with `@tailwindcss/turbopack`
- **Fonts**: `next/font` (Geist, Geist Mono, Source Serif 4, Roboto)
- **Email Service**: [Resend](https://resend.com)
- **Deployment**: [Vercel](https://vercel.com) with custom apex DNS routing

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- `pnpm` (or `npm` / `yarn`)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/PrathameshDev2803/portfolio-nextjs.git
   cd portfolio-nextjs
   ```

2. **Install dependencies**:
   ```bash
   pnpm install
   ```

3. **Set up environment variables**:
   ```bash
   cp .env.example .env.local
   ```
   Add your Resend API credentials in `.env.local`:
   ```env
   RESEND_API_KEY=re_your_api_key
   CONTACT_EMAIL=prathameshjadhav2803@gmail.com
   CONTACT_FROM_EMAIL=Portfolio Contact <notifications@prathameshjadhav.com>
   NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-username
   ```

4. **Run development server**:
   ```bash
   pnpm dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the site.

5. **Build for production**:
   ```bash
   pnpm build
   pnpm start
   ```

---

## 📂 Project Structure

```text
├── public/                # Static assets, illustrations, CV PDF
├── scripts/               # Build utilities (version generation)
├── src/
│   ├── app/
│   │   ├── api/contact/   # Resend email API route with spam defense
│   │   ├── layout.tsx     # Root layout with fonts, metadata, and providers
│   │   ├── page.tsx       # Main single-page portfolio layout
│   │   ├── robots.ts      # Search engine robots.txt route
│   │   └── sitemap.ts     # Dynamic XML sitemap generator
│   ├── components/        # UI sections (Hero, About, Projects, Skills, Contact, etc.)
│   └── lib/               # Shared validation schemas and utilities
├── next.config.ts         # Next.js caching headers and Turbopack rules
└── tailwind.config        # Design tokens & color system
```

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
