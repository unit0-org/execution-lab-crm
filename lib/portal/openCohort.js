import { Cohort } from '@/lib/cohort/models'

// The org's open cohort for a slug, or null (draft/closed never returned).
export async function openCohort(organizationId, slug) {
  const row = await Cohort.findOne({
    where: { slug, organization_id: organizationId, status: 'open' }
  })

  return row ? row.toJSON() : null
}
