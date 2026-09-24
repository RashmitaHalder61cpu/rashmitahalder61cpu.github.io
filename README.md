# Rashmita Halder — Personal Developer Portfolio

A modern, production-quality editorial developer portfolio designed and built for **Rashmita Halder** (B.Tech Computer Science & Engineering student at REVA University).

---

## 🎨 Design Philosophy & Highlights

- **Aesthetic**: Modern editorial layout with refined serif headings, clean sans typography, and warm tactile background (`#F9F8F6`).
- **Color Palette**:
  - Canvas: `#F9F8F6`
  - Text Primary: `#141413`
  - Muted Text: `#6B6862`
  - Cards: `#FFFFFF`
  - Borders: `#E5E0D8`
  - Accent: `#D9480F` (Terracotta / Deep Orange)
- **Authenticity First**: Strictly genuine student profile with zero fabricated experience, fake companies, or inflated metrics.
- **Accessibility**: Keyboard navigable, high contrast ratios, semantic HTML5 structure (`header`, `nav`, `main`, `section`, `article`, `footer`), and screen-reader accessible.
- **Responsive**: 100% responsive across mobile, tablet, laptop, and ultra-wide screens with zero horizontal overflow.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Bundler & Tooling**: [Vite](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/) + Custom SVG Icons
- **Utility Helpers**: `clsx` & `tailwind-merge`

---

## 📁 Project Architecture

```
rashmita-portfolio/
├── public/                 # Static assets & favicon
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky header with active scroll spy & mobile menu
│   │   ├── Hero.jsx            # Editorial introduction, CTAs & profile snapshot
│   │   ├── About.jsx           # Authentic background narrative & learning pillars
│   │   ├── Skills.jsx          # Filterable grid of 8 verified skills
│   │   ├── Projects.jsx        # Showcase grid of authentic projects
│   │   ├── Education.jsx       # Academic credentials & coursework
│   │   ├── Contact.jsx         # Verified GitHub, LinkedIn & copyable email placeholder
│   │   ├── Footer.jsx          # Minimal professional footer with back-to-top
│   │   ├── SectionHeading.jsx  # Reusable numbered section title
│   │   ├── ProjectCard.jsx     # Editorial project card with technical highlights
│   │   ├── SkillCard.jsx       # Skill badge, icon, and application summary
│   │   ├── SocialLink.jsx      # Accessible social & contact link
│   │   └── Icons.jsx           # Scalable SVG icons for GitHub & LinkedIn
│   ├── data/
│   │   └── portfolioData.js    # Single source of truth for all content & links
│   ├── utils/
│   │   └── cn.js               # Class merge utility (clsx + tailwind-merge)
│   ├── App.jsx                 # App root with semantic container & skip link
│   ├── index.css               # Tailwind CSS v4 design tokens and base styles
│   └── main.jsx                # React root entry point
├── index.html                  # HTML entry with SEO meta tags & Google Fonts
├── package.json
└── vite.config.js              # Vite configuration with Tailwind v4 plugin
```

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### 2. Installation
```bash
npm install
```

### 3. Development Server
Run the local dev server with hot module reloading (HMR):
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Production Build
Generate an optimized production build:
```bash
npm run build
```
The output will be created inside the `dist/` directory.

### 5. Preview Production Build
```bash
npm run preview
```

---

## 📝 Updating Your Information

All website content is conveniently centralized in a single file:
👉 **[`src/data/portfolioData.js`](file:///C:/Users/RASHMITA/.gemini/antigravity/scratch/rashmita-portfolio/src/data/portfolioData.js)**

### Updating Your Email:
Open `src/data/portfolioData.js` and locate `socials.emailPlaceholder`:
```javascript
socials: {
  github: "https://github.com/RashmitaHalder61cpu",
  linkedin: "https://www.linkedin.com/in/rashmita-halder/",
  emailPlaceholder: "your-real-email@domain.com", // <-- update here
}
```

### Adding New Projects:
Simply append an object to the `projects` array in `src/data/portfolioData.js`:
```javascript
{
  id: "your-new-project",
  title: "Project Title",
  subtitle: "Category / Domain",
  description: "Accurate overview of your project...",
  technologies: ["Language", "Framework", "Tool"],
  capabilities: [
    "Key engineering achievement 1",
    "Key engineering achievement 2",
  ],
  githubUrl: "https://github.com/RashmitaHalder61cpu/your-repo-name",
}
```

---

## 🌐 Deployment Options

### Deploy to Vercel
1. Push this repository to your GitHub account (`@RashmitaHalder61cpu`).
2. Log into [vercel.com](https://vercel.com) and import the repository.
3. Build command: `npm run build`
4. Output directory: `dist`
5. Click **Deploy**.

### Deploy to GitHub Pages
You can use `gh-pages` or GitHub Actions with standard static site deployment pointing to `dist`.
