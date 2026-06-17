import { sequelize } from '@/lib/db/sequelize'
import { validateEnrichment } from './validateEnrichment'
import { runEnrichment } from './runEnrichment'
import { dryRunEnrichment } from './dryRunEnrichment'

// Op1: apply a whole transcript's enrichment in ONE transaction — all writes
// commit or none do. With dryRun, the planned writes are computed then
// rolled back. Returns the applied counts and resolved contact ids.
export function applyMeetingEnrichment(input) {
  const invalid = validateEnrichment(input)

  if (invalid) return invalid

  if (input.dryRun) return dryRunEnrichment(input)

  return sequelize.transaction((t) => runEnrichment(input, t))
}
