# SportPass

Bilingual (EN/AR) sports discovery & registration platform for Saudi Arabia.
Built as a pnpm monorepo, designed for Replit deployment.

## Quick Commands

```bash
# Install dependencies
pnpm install

# Frontend dev server (port 5173)
pnpm --filter @workspace/sportpass run dev

# Backend dev server (port 8080, needs DATABASE_URL)
pnpm --filter @workspace/api-server run dev

# Type checking
pnpm run typecheck

# API codegen (after editing openapi.yaml)
pnpm --filter @workspace/api-spec run codegen
```

## Architecture

- `artifacts/sportpass` — React frontend (Vite + Tailwind + shadcn/ui)
- `artifacts/api-server` — Express 5 backend
- `lib/db` — Drizzle ORM + PostgreSQL (DATABASE_URL from Replit)
- `lib/api-spec` — OpenAPI 3.1 spec (source of truth for API)
- `lib/api-client-react` — Generated React Query hooks (via Orval)
- `lib/api-zod` — Generated Zod schemas (via Orval)

## Notes

- Frontend currently uses static mock data in `artifacts/sportpass/src/data/`
- Database schema not yet defined in `lib/db/src/schema/`
- Only API endpoint is GET /api/healthz
- Project will be returned to Replit for deployment — preserve all .replit and artifact.toml configs
