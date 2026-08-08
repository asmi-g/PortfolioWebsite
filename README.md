# Women in Engineering Portfolio Workshop

Welcome! This template is made for the **Women in Engineering Portfolio Workshop** where you build your own portfolio and deploy it live.

You do **not** need to be an expert coder to complete this.

---

## What you are building

You are creating a one-page personal portfolio with:

- Hero section (your intro)
- About section
- Projects section
- Contact section

Tech stack:

- React + Vite
- Tailwind CSS
- Vercel for deployment

---

## Before you start

Please install:

1. [Node.js](https://nodejs.org/) (version 20+ recommended)
2. [VS Code](https://code.visualstudio.com/)
3. A GitHub account
4. A Vercel account (you can sign in with GitHub)

To check Node and npm in your terminal:

```bash
node -v
npm -v
```

If both show version numbers, you’re good.

To clone this repo:

```bash
git clone <your-repo-url>
cd portfolio-website
```

Replace `<your-repo-url>` with your GitHub repository URL.

---

## Quick start (copy and paste)

In terminal, from this project folder:

```bash
npm install
npm run dev
```

Then open the URL shown in terminal (usually `http://localhost:5173`).

---

## File guide (the only files you really need)

- `src/App.jsx` → main content on the page
- `src/index.css` → global styles + Tailwind import
- `README.md` → this guide

---

## Beginner editing guide (no stress version)

### 1) Update your name + intro

Open `src/App.jsx` and find the top section.

Replace:

- `YOUR NAME`
- headline text
- intro paragraph

### 1.5) Add your profile photo

In the hero section, there is a placeholder circle that says `Add Profile Photo`.

Replace that placeholder with an `<img />` tag once you have a photo URL, or keep it as-is during the workshop.

Tip: Keep your intro to 2–3 lines.

### 2) Update About section

In `About Me`, write:

- What you study/work on
- What interests you in engineering/tech
- What opportunities you’re looking for

### 3) Update project cards

At the top of `src/App.jsx`, edit the `projects` array.

Each project has:

- `title`
- `description`
- `tech`

If you only have 1–2 projects, that’s totally okay.

### 4) Update contact section

Add your:

- email
- LinkedIn
- GitHub (if you have one)

---

## Optional customizations (easy wins)

### Super easy color palette swap (2-3 minutes)

Use [https://coolors.co/](https://coolors.co/) to generate a palette you like.

Then do this in VS Code:

1. Press `Cmd + Shift + H` (Replace in Files).
2. Replace the old colors below with your new hex colors (include the `#`).

Current template colors:

- `#432818` (main text / headings)
- `#7e9c52` (borders)
- `#f3cecd` (cards / light backgrounds)
- `#E9AFA3` (hover / accents)
- `#685044` (secondary text)
- `#f8f4f3` (webpage background)

Tip: Replace one color at a time, then save and check your browser.

---

## If you are totally new to coding

Use this pattern:

1. Change one small line.
2. Save the file.
3. Refresh browser and check result.
4. If something breaks, undo (`Cmd + Z`).

That’s it. Small edits are the safest path.

---

## Build check before deploy

Run:

```bash
npm run build
```

If this passes, you’re ready to deploy.

---

## Deploy to Vercel (recommended path)

### Step A — Push to GitHub

If you haven’t already:

```bash
git add .
git commit -m "workshop portfolio"
git push
```

### Step B — Import in Vercel

1. Go to [https://vercel.com](https://vercel.com)
2. Click **Add New Project**
3. Import your GitHub repo
4. Keep defaults (Vercel detects Vite)
5. Click **Deploy**

Expected values:

- Framework Preset: `Vite`
- Build Command: `npm run build`
- Output Directory: `dist`

---

## Troubleshooting

### Problem: `npm install` fails

Try:

```bash
rm -rf node_modules package-lock.json
npm install
```

### Problem: Dev server won’t start

Close old terminals and run:

```bash
npm run dev
```

### Problem: Styles are missing

Check:

- `vite.config.js` contains `@tailwindcss/vite`
- `src/index.css` contains `@import 'tailwindcss';`
- `src/main.jsx` imports `./index.css`

---

## Suggested workshop pacing (for mentors)

- 10 min: setup + run locally
- 20 min: hero/about/contact
- 20 min: project cards + styling
- 10 min: GitHub push
- 10 min: Vercel deploy + share links

---

You belong in engineering spaces. Ship your site and be proud of it.
