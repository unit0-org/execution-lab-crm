# syntax=docker/dockerfile:1
# Cloud Run image for the CRM. Multi-stage: the runtime image ships Next's
# standalone server (only the traced deps) instead of the full node_modules,
# so it pushes and cold-starts far faster. The build runs `next build` ONLY
# — never `pnpm build` (which would migrate the DB). Migrations run at deploy
# time from a separate `docker run … node scripts/migrate.mjs` step, which
# still works because `pg` is a serverExternalPackage and ships in standalone.

FROM node:22-bookworm-slim AS deps
WORKDIR /app
RUN npm install -g pnpm@10
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

FROM node:22-bookworm-slim AS builder
WORKDIR /app
RUN npm install -g pnpm@10
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Public config, inlined into the client bundle at build time.
ARG NEXT_PUBLIC_SUPABASE_URL
ARG NEXT_PUBLIC_SUPABASE_ANON_KEY
ARG NEXT_PUBLIC_SITE_URL
ARG NEXT_PUBLIC_PORTAL_URL
ENV NEXT_PUBLIC_SUPABASE_URL=$NEXT_PUBLIC_SUPABASE_URL \
    NEXT_PUBLIC_SUPABASE_ANON_KEY=$NEXT_PUBLIC_SUPABASE_ANON_KEY \
    NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL \
    NEXT_PUBLIC_PORTAL_URL=$NEXT_PUBLIC_PORTAL_URL

RUN pnpm exec next build

FROM node:22-bookworm-slim AS runner
WORKDIR /app
ENV NODE_ENV=production PORT=8080

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

# Migration assets: run at deploy time via `node scripts/migrate.mjs`.
COPY --from=builder /app/scripts ./scripts
COPY --from=builder /app/supabase/migrations ./supabase/migrations

EXPOSE 8080
CMD ["node", "server.js"]
