import { Cohort } from '../models'
import { defaultRegistrationWindow } from './defaultRegistrationWindow'

// Create a cohort for an org from validated form data, seeding the
// registration window from the rule defaults when the admin left it blank
// (formToCohort omits the dates it didn't fill, so they don't override).
export function createCohort(organizationId, data) {
  return Cohort.create({
    organization_id: organizationId,
    ...defaultRegistrationWindow(data.start_date),
    ...data
  }).then((row) => ({ ok: true, id: row.id }))
}
