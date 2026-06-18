# RemoteRecruit

Marketing landing page for [RemoteRecruit](https://remoterecruit1.netlify.app/) — a platform connecting remote workers with employers.

**Live site:** [https://remoterecruit1.netlify.app/](https://remoterecruit1.netlify.app/)

## Project setup

**Prerequisites:** Node.js 20+ and npm.

```bash
# Install dependencies
npm install

# Start the dev server (http://localhost:5173)
npm run dev

# Production build (output in dist/)
npm run build

# Preview the production build locally
npm run preview

# Run ESLint
npm run lint
```

**Deploy:** The site is hosted on Netlify. Connect the repo and use:

- **Build command:** `npm run build`
- **Publish directory:** `dist`

## Framework & libraries

| Category | Technology |
|----------|------------|
| UI | [React](https://react.dev/) 19 |
| Language | [TypeScript](https://www.typescriptlang.org/) |
| Build tool | [Vite](https://vite.dev/) 8 |
| Styling | [Tailwind CSS](https://tailwindcss.com/) 4 (via `@tailwindcss/vite`) + component CSS modules |
| Linting | ESLint with TypeScript and React plugins |

The app is a single static page with no client-side router or backend dependencies.

## Known issues & limitations

- **Placeholder links** — Sign In, Sign Up, Get Started, FAQ, and social links use `#` anchor URLs; there is no auth flow or backend integration yet.
- **Single page only** — No multi-page routing; all content lives on the home page.
- **Large image assets** — Hero and background images are several MB each, which can slow initial load on slower connections. Consider compressing or serving responsive/WebP variants.
- **Default page metadata** — The HTML `<title>` is still the Vite template default (`React Vite TypeScript App`).
- **Unused pricing component** — `PricingSection` exists in the codebase but is not rendered; pricing UI is implemented inside `SiteFooter` instead.
- **Asset filenames** — Some source images include spaces in their names (e.g. `Find Work.png`), which works with Vite but is awkward for tooling and URLs.
