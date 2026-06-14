#!/usr/bin/env bash
# Logical backup of the Supabase Postgres database.
#
# Runs pg_dump (Postgres 17, via Docker so the client matches the server)
# against SUPABASE_DB_URL from .env.local. Writes the gzipped dump OUTSIDE
# the repo (default ~/crm-db-backups, override with CRM_BACKUP_DIR) so a
# dump — which holds customer PII — can never be committed. Upload it to
# Google Drive, then delete the local copy.
#
# Run this BEFORE any dangerous or complicated push — schema restructures,
# data migrations, bulk merges/deletes — per AGENTS.md.
#
# Usage:  ./scripts/backup-db.sh   (or: pnpm backup:db)
set -euo pipefail
cd "$(dirname "$0")/.."

URL=$(node -e 'const fs=require("fs");const m=fs.readFileSync(".env.local","utf8").match(/^SUPABASE_DB_URL=(.*)$/m);if(!m){console.error("SUPABASE_DB_URL missing from .env.local");process.exit(1)}process.stdout.write(m[1].trim().replace(/^["'"'"']|["'"'"']$/g,""))')

DIR="${CRM_BACKUP_DIR:-$HOME/crm-db-backups}"
mkdir -p "$DIR"
TS=$(date +%Y%m%d-%H%M%S)
OUT="$DIR/crm-backup-$TS.sql.gz"

echo "Dumping database to $OUT ..."
docker run --rm -e PGURL="$URL" postgres:17 \
  sh -c 'pg_dump "$PGURL" --no-owner --no-acl' | gzip > "$OUT"

echo "Backup complete: $OUT ($(du -h "$OUT" | cut -f1))"
echo "→ Upload it to your Google Drive, then delete the local copy."
