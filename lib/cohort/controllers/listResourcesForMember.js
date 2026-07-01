import { confirmedCohortsForContact } from './confirmedCohortsForContact'
import { cohortWithFolders } from './cohortWithFolders'

// A member's confirmed cohorts, each with its folders and resources, for
// the portal Resources page.
export async function listResourcesForMember(contactId) {
  const cohorts = await confirmedCohortsForContact(contactId)

  return Promise.all(cohorts.map(cohortWithFolders))
}
