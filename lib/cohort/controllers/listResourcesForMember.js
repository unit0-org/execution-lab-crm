import { confirmedCohortsForContact } from './confirmedCohortsForContact'
import { listCohortFolders } from './listCohortFolders'

const pickCohort = (c) =>
  ({ id: c.id, label: c.label, slug: c.slug, start_date: c.start_date })

const withFolders = async (cohort) => ({
  cohort: pickCohort(cohort),
  folders: await listCohortFolders(cohort.id)
})

// A member's confirmed cohorts, each with its folders and resources, for
// the portal Resources page.
export async function listResourcesForMember(contactId) {
  const cohorts = await confirmedCohortsForContact(contactId)

  return Promise.all(cohorts.map(withFolders))
}
