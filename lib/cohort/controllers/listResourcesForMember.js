import { confirmedCohortsForContact } from './confirmedCohortsForContact'
import { listCohortResources } from './listCohortResources'
import { groupResourcesBySession } from '../groupResourcesBySession'

const pickCohort = (c) =>
  ({ id: c.id, label: c.label, slug: c.slug, start_date: c.start_date })

const withSessions = async (cohort) => ({
  cohort: pickCohort(cohort),
  sessions: groupResourcesBySession(await listCohortResources(cohort.id))
})

// A member's confirmed cohorts, each with its resources grouped by session,
// for the portal Resources page.
export async function listResourcesForMember(contactId) {
  const cohorts = await confirmedCohortsForContact(contactId)

  return Promise.all(cohorts.map(withSessions))
}
