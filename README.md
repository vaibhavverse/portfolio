# Vaibhav Kumar — Portfolio

A premium, modern, and fully responsive personal portfolio for a Full Stack Developer. Built with React (Vite), Tailwind CSS, and Framer Motion.

## Tech Stack

- **React 18** (Vite)
- **Tailwind CSS** — utility-first styling, dark theme
- **Framer Motion** — animations and transitions
- **React Icons** — icons (GitHub, LinkedIn, Email, etc.)

## Features

- Sticky navbar with glass/blur effect on scroll
- Full-screen hero with animated gradient background and rotating subtitle
- About section with highlight cards (5+ Projects, MERN, DSA)
- Skills section with categorized tech (Frontend, Backend, Programming, Tools)
- Project cards with hover effects and links (GitHub, Live)
- Experience timeline (Infosys 5.0, Design Verification)
- Contact form and social links
- Scroll progress indicator, loading animation, smooth scroll
- Mobile-first responsive design

## Installation

### Prerequisites

- Node.js 18+ and npm (or yarn/pnpm)

### Steps

1. **Clone or navigate to the project**
   ```bash
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

## Tailwind Setup

Tailwind is already configured:

- `tailwind.config.js` — content paths, dark theme, custom colors (e.g. `accent-cyan`, `accent-violet`), and custom animations
- `postcss.config.js` — Tailwind and Autoprefixer
- `src/index.css` — `@tailwind base/components/utilities` and custom utilities (e.g. `.text-gradient`, `.glass`)

No extra setup is required after `npm install`.

## Build for Production

```bash
npm run build
```

Output is in the `dist/` folder. Preview the production build locally:

```bash
npm run preview
```

## Deploy on Vercel

1. **Push your code to GitHub** (if not already).
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
3. Click **Add New** → **Project** and import your repository.
4. Vercel will detect Vite. Keep the default settings:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
5. Click **Deploy**. Your site will be live at `https://your-project.vercel.app`.

### Optional: Custom domain

In the project dashboard on Vercel, go to **Settings** → **Domains** and add your domain.

## Project Structure

```
src/
├── components/       # Reusable UI
│   ├── ScrollProgress.jsx
│   ├── LoadingScreen.jsx
│   ├── Navbar.jsx
│   └── Hero.jsx
├── sections/         # Page sections
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Experience.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── assets/           # Images, etc. (optional)
├── App.jsx
├── main.jsx
└── index.css
```

## Customization

- **Resume:** Place your resume PDF in `public/resume.pdf` or update the `RESUME_URL` in `src/components/Hero.jsx`.
- **Email:** Replace `your-email@example.com` in `src/sections/Contact.jsx` and `src/sections/Footer.jsx`.
- **Social links:** Update GitHub and LinkedIn URLs in `Hero`, `Contact`, and `Footer`.
- **Projects:** Edit the `projects` array in `src/sections/Projects.jsx` (titles, descriptions, tech, links).

---

© Vaibhav Kumar
