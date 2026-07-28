import { Cohort } from '../models'
import { findDeleteBlockers } from './findDeleteBlockers'

// Delete a cohort, but only while nothing has signed up for it and nobody
// is invited to it (findDeleteBlockers owns that rule). The cohort's own
// folders and resources go with it; anything else returns the reason so
// the caller can show it instead of a raw database error.
export async function deleteCohort(id) {
  const cohort = await Cohort.findByPk(id)

  if (!cohort) return { error: 'Cohort not found' }

  const blockers = await findDeleteBlockers()

  if (blockers[id]) return { error: blockers[id] }

  await cohort.destroyWithFolders()

  return { ok: true }
}
