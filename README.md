# BlackBird Front End

The official web frontend for **Black Bird Smart Wristband** — a React-based single-page application built with Vite and deployed on Firebase Hosting.

## Live Site

- **Production:** https://blackbird-website-prod.web.app

## Tech Stack

- **React 18** with React Router DOM
- **Vite** — build tooling
- **Firebase** — authentication (Google + email/password) & hosting
- **ESLint** — code quality

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, features, products, pricing, emergency, CTA |
| About | `/about` | Company info, team, mission |
| Login | `/login` | Firebase Auth (Google + email/password) |
| Register | `/register` | Firebase Auth registration |
| Forgot Password | `/forgot-password` | Firebase password reset email |
| Profile | `/profile` | User profile, edit name, change password |

## Getting Started

```bash
cd blackbird-react
npm install
npm run dev
```

## Deployment

```bash
cd blackbird-react
npm run build
firebase deploy --only hosting
```

## Project Structure

```
├── blackbird-react/       # React app (Vite)
│   ├── src/               # Source code
│   ├── public/            # Static assets
│   ├── firebase.json      # Firebase hosting config
│   └── package.json
├── blackbird-site-scrape/ # Original site reference
└── MIGRATION_PROGRESS.md  # AWS → Firebase migration tracker
```

## Migration

This project is part of the AWS → Firebase/GCP migration. See [MIGRATION_PROGRESS.md](MIGRATION_PROGRESS.md) for details.

## License

Proprietary — Black Bird Smart Innovations
