import { Cohort } from '@/lib/cohort/models'

// The open cohort for a slug, or null (draft/closed never returned).
export async function openCohort(slug) {
  const row = await Cohort.scope('open').findOne({
    where: { slug }
  })

  return row ? row.toJSON() : null
}
