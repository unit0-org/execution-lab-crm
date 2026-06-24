import { CohortFolder } from '../models'

const clean = (value) => (value || '').trim()

// Create a named folder (e.g. "Session 1") in a cohort.
export function addCohortFolder(input) {
  const name = clean(input.name)

  if (!name) return Promise.resolve({ error: 'Name the folder' })

  return CohortFolder.create({ cohort_id: input.cohortId, name })
    .then(() => ({ ok: true }))
}
