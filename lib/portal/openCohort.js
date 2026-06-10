import { Cohort } from '@/lib/cohort/models'

// The org's open cohort for an id, or null (draft/closed never returned).
export async function openCohort(organizationId, cohortId) {
  const row = await Cohort.findOne({
    where: { id: cohortId, organization_id: organizationId, status: 'open' }
  })

  return row ? row.toJSON() : null
}
