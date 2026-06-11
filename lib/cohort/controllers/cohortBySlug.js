import { Cohort } from '../models'

// The cohort with this slug, or null — resolves the slug in a shared
// portal URL back to the cohort row.
export function cohortBySlug(slug) {
  if (!slug) return Promise.resolve(null)

  return Cohort.findOne({ where: { slug } })
    .then((row) => (row ? row.toJSON() : null))
}
