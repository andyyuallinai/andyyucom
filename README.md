# andyyuuk-personal (Cloudflare Pages + Functions + D1)

## Local development

1. Install dependencies:
   - `npm install`
2. Run frontend dev server:
   - `npm run dev`

## Cloudflare setup

### 1) Login Cloudflare

- `npx wrangler login`

### 2) Create Pages project

- `npx wrangler pages project create andyyuuk-personal --production-branch main`

### 3) Create D1 database

- `npm run cf:db:create`

After creation, Wrangler will print a `database_id`.
Copy that value into `wrangler.toml`:

- `database_id = "REPLACE_WITH_YOUR_D1_DATABASE_ID"`

### 4) Apply D1 migrations

- Local (optional): `npm run cf:db:migrate:local`
- Remote (required): `npm run cf:db:migrate:remote`

### 5) Set Gemini secret

- `npm run cf:secret:set`

Then paste your Gemini API key when prompted.

### 6) Deploy

- `npm run cf:deploy`

## What changed

- Gemini API call moved from frontend to Cloudflare Pages Function `functions/api/translate.ts`
- Frontend no longer exposes any Gemini API key
- Translation data is cached in D1 (`translations` table) via `migrations/0001_create_translations.sql`
