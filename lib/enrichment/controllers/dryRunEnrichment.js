import { sequelize } from '@/lib/db/sequelize'
import { runEnrichment } from './runEnrichment'

// Run the enrichment in a transaction, capture the planned result, then roll
// back so nothing commits. Adds dryRun/committed flags.
export async function dryRunEnrichment(input) {
  const t = await sequelize.transaction()

  try {
    const result = await runEnrichment(input, t)

    await t.rollback()

    return { ...result, dryRun: true, committed: false }
  } catch (e) {
    if (!t.finished) await t.rollback()

    throw e
  }
}
