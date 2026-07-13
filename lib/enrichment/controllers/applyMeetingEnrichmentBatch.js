import { sequelize } from '@/lib/db/sequelize'
import { validateEnrichment } from './validateEnrichment'
import { runEnrichment } from './runEnrichment'

// Apply many transcripts' enrichment in ONE transaction — all commit or
// none do. Each item is { id, name, payload }; name labels a failure so the
// cron log says which file broke the batch.
export function applyMeetingEnrichmentBatch(items, actor) {
  return sequelize.transaction((t) => runBatch(items, t, actor))
}

async function runBatch(items, t, actor) {
  const results = []

  for (const item of items) {
    const invalid = validateEnrichment(item.payload)

    if (invalid) throw new Error(`${item.name}: ${invalid.error}`)

    results.push(await runEnrichment(item.payload, t, actor))
  }

  return results
}
