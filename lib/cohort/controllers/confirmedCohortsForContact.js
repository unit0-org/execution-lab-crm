import { Registration } from '@/lib/registration/models'

const dedupeById = (cohorts) => {
  const byId = {}

  cohorts.forEach((cohort) => { byId[cohort.id] = cohort })

  return Object.values(byId)
}

// The distinct cohorts a contact holds a confirmed (pending or paid) seat
// in, as plain objects — gated by the shared `confirmed` scope.
export async function confirmedCohortsForContact(contactId) {
  const rows = await Registration.scope('confirmed').findAll({
    where: { contact_id: contactId },
    include: [{ association: 'cohort' }]
  })
  const cohorts = rows.map((row) => row.toJSON().cohort).filter(Boolean)

  return dedupeById(cohorts)
}
