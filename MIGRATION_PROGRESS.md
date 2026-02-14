# BlackBird AWS → Firebase/GCP Migration Progress

**Date started:** 2026-02-13
**Target project:** `blackbird-website-prod`

---

## Phase 1: Firebase Hosting (React Frontend) — DONE

| File | Status |
|------|--------|
| `blackbird-react/firebase.json` | Created — SPA rewrite, caching headers, security headers |
| `blackbird-react/.firebaserc` | Created — points to `blackbird-website-prod` |
| `blackbird-react/.env` | Populated with real Firebase SDK config from API |
| `blackbird-react/package.json` | Added `npm run deploy` script |

- Built with `vite build`, deployed with `firebase deploy --only hosting`
- **Live at:** https://blackbird-website-prod.web.app
- SPA routing confirmed working (`/about`, `/login` all serve correctly)

### React App Pages (all implemented)

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, features, products, pricing, emergency, CTA sections |
| About | `/about` | Company info, team, mission |
| Login | `/login` | Firebase Auth (Google + email/password) |
| Register | `/register` | Firebase Auth registration |
| Forgot Password | `/forgot-password` | Firebase password reset email |
| Profile | `/profile` | User profile with edit name, change password, quick links |
| Products | `/products` | Product listing grid with search |
| Product Detail | `/products/:id` | Gallery, color picker, quantity, add-to-cart |
| Cart | `/cart` | Cart items, quantity controls, address select, checkout |
| Orders | `/orders` | Order list with status filter tabs |
| Order Detail | `/orders/:id` | Order info, timeline, cancel/return actions |
| Addresses | `/addresses` | CRUD address management with default selection |
| Notifications | `/notifications` | Notification list with type icons, clear-all |
| Privacy Policy | `/privacy` | Legal page |
| Terms of Service | `/terms` | Legal page |

### Frontend Architecture

- **Framework:** React 19 + Vite + React Router 7
- **Auth:** Firebase Auth (Google + email/password) → synced to Laravel backend via `POST /api/auth/firebase`
- **API:** `src/lib/api.js` shared fetch utility, Bearer token auth against Laravel Sanctum
- **Styling:** CSS custom properties design system, dark mode, responsive (breakpoints at 1024/900/768/480px)
- **State:** AuthContext provides `user`, `backendToken`, `backendLoading`, `logout`

### Cleanup

- Removed `blackbird-modern/` (legacy static HTML) from repo
- Removed `launcher/` and `BlackbirdWebsite.exe` (legacy desktop launcher)
- Updated `.gitignore` for node_modules, dist, .firebase, .DS_Store

---

## Phase 2: Dockerize Laravel Backend — DONE

| File | Status |
|------|--------|
| `Backend-Website/Dockerfile` | PHP 8.1-fpm-alpine + nginx + supervisord, entrypoint clears bootstrap cache |
| `Backend-Website/docker/nginx.conf` | Port 8080, PHP-FPM proxy, gzip, `/health` endpoint |
| `Backend-Website/docker/supervisord.conf` | Manages php-fpm, nginx, queue worker (`database` driver) |
| `Backend-Website/docker/php.ini` | 64M uploads, 256M memory, opcache, stderr logging |
| `Backend-Website/docker/entrypoint.sh` | Clears stale bootstrap cache, re-discovers packages on startup |
| `Backend-Website/docker-compose.yml` | Local dev with MySQL 8.0, health checks |
| `Backend-Website/.dockerignore` | Excludes .git, vendor, node_modules, env files, tests |

- Docker image builds successfully
- `docker compose up` starts app + MySQL
- All 90+ migrations ran successfully
- Health: **200**, Root: **302** (redirect to login), API: **200**

### Bug fix during Docker setup
- `app/Providers/AppServiceProvider.php` — Added `class_exists()` guard around Telescope registration so the app doesn't crash when dev dependencies aren't installed (production Docker builds use `--no-dev`)

---

## Phase 3-4: GCP Infrastructure & Cloud Run Deploy — DONE

### GCP Infrastructure (created)

| Resource | Details |
|----------|---------|
| Artifact Registry | `blackbird-backend` repo in `us-east1` |
| Cloud SQL | `blackbird-db` — MySQL 8.0, db-f1-micro, us-east1 |
| Cloud SQL database | `blackbird` with user `blackbird` |
| Cloud Storage | `blackbird-website-prod-media` bucket (public) |
| Secret Manager | 8 secrets: APP_KEY, DB_PASSWORD, STRIPE_KEY, STRIPE_SECRET, STRIPE_WEBHOOK_SECRET, TWILIO_SID, TWILIO_TOKEN, MAIL_PASSWORD |
| Billing | Account `0118EB-201F0E-573AEF` linked |

### Cloud Run Deployment

- **Service URL:** https://blackbird-backend-98242616530.us-east1.run.app
- 1 vCPU, 512MB, min 1 / max 10 instances
- Cloud SQL proxy sidecar for DB access
- Secrets injected from Secret Manager
- All 90+ migrations ran via Cloud Run job
- Health: **200**, Root: **302**, Login: **200**, API: **200**

### Bug fixes during Cloud Build

- **Brace expansion in Alpine `sh`** — `{sessions,views,cache}` doesn't expand in BusyBox ash; replaced with explicit directory paths in Dockerfile and entrypoint.sh
- **`VIEW_COMPILED_PATH` env var** — `realpath()` returns false for paths that don't exist yet during Docker build; set explicitly in Dockerfile
- **ARM Mac build failure** — QEMU segfaults when building linux/amd64 locally; switched to Cloud Build (`gcloud builds submit`)

### Files

| File | Description |
|------|-------------|
| `Backend-Website/scripts/gcp-setup.sh` | Enables APIs, creates infrastructure |
| `Backend-Website/scripts/deploy-cloudrun.sh` | Builds/pushes image, deploys to Cloud Run |
| `Backend-Website/.env.cloudrun` | Cloud Run env var template |
| `Backend-Website/config/filesystems.php` | Added `gcs` disk for Google Cloud Storage |
| `Backend-Website/composer.json` | Added `superbalist/laravel-google-cloud-storage` ^2.0 |

---

## Phase 5: Firebase Auth ↔ Laravel Backend Bridge — DONE

| File | Action |
|------|--------|
| `Backend-Website/app/Http/Controllers/Api/Auth/FirebaseAuthController.php` | Created — verifies Firebase ID token, creates/finds user, returns Sanctum token |
| `Backend-Website/routes/api.php` | Added `POST /api/auth/firebase` route |
| `Backend-Website/app/Models/User.php` | Added `social_type`, `social_id` to `$fillable` |
| `blackbird-react/src/context/AuthContext.jsx` | Syncs Firebase auth to backend, exposes `backendToken` |
| `blackbird-react/src/pages/LoginPage.jsx` | Auto-syncs to backend after Firebase auth |
| `blackbird-react/src/pages/RegisterPage.jsx` | Auto-syncs to backend after Firebase auth |

---

## Phase 6: Data Migration (AWS → GCP) — READY

| File | Description |
|------|-------------|
| `Backend-Website/scripts/migrate-data.sh` | SSH dump MySQL from AWS (`54.243.197.37`), import to Cloud SQL, copy media to GCS, update `media` table disk refs |

### Blocked on

- SSH access to AWS server

---

## Phase 7: Custom Domain — PARTIALLY DONE

### Code changes (done)

| File | Change |
|------|--------|
| `blackbird-react/src/components/layout/Navbar.jsx` | Products link now uses `import.meta.env.VITE_BACKEND_URL` |
| `blackbird-react/src/components/layout/MobileMenu.jsx` | Same env var update |

### DNS changes (manual — GoDaddy API keys expired)

| Domain | Record | Points To | Status |
|--------|--------|-----------|--------|
| `blackbirdtech.app` | A records | Firebase Hosting IPs | Pending |
| `web.blackbirdtech.app` | CNAME | `ghs.googlehosted.com` | Pending |

---

## Phase 8: Cutover & Verification — NOT STARTED

- [ ] Test at `.web.app` / `.run.app` URLs
- [ ] Switch DNS on GoDaddy
- [ ] Verify: frontend pages, auth, backend admin, API endpoints, media uploads, Stripe webhooks, SMS
- [ ] Keep AWS running 1 week as safety net
- [ ] Decommission AWS

---

## Other Changes

| File | Change |
|------|--------|
| `Backend-Website/.gitignore` | Added `.env.development`, `.env.production`, `.DS_Store`, Firebase service account key pattern |
| `Backend-Website/` branch | `feature/firebase-cloud-run-migration` created from `master` |

---

## Tools Installed

| Tool | Version |
|------|---------|
| `firebase-tools` | 15.5.1 (was already installed) |
| `gcloud` CLI | 556.0.0 (installed via brew) |
| `docker` | 28.5.1 / engine 29.2.0 |
| `node` | 25.5.0 |
| `php` | 8.1.34 |
| `composer` | 2.9.5 |

---

## What's Left To Do

1. **Migrate data from AWS** — `./scripts/migrate-data.sh` (requires SSH access to `54.243.197.37`)
2. **Map custom domain** — `gcloud run domain-mappings create --service=blackbird-backend --domain=web.blackbirdtech.app --region=us-east1`
3. **Update DNS on GoDaddy** (web console)
4. **Rebuild & deploy backend to Cloud Run** with Firebase Auth controller
5. **Verify everything**, keep AWS running 1 week, then decommission

---

## Estimated Monthly Cost (post-migration)

| Service | Cost |
|---------|------|
| Firebase Hosting | Free (Spark plan) |
| Cloud Run (1 vCPU, 512MB, min 1 instance) | ~$15-25 |
| Cloud SQL (db-f1-micro, 10GB) | ~$8-12 |
| Cloud Storage | ~$0.02 |
| **Total** | **~$25-40/mo** |
