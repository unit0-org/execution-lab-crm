import { Text } from '@/ui/atoms/Text'
import { listContacts } from '@/lib/contact/controllers/list'
import { toContactOptions } from '@/lib/contact/controllers/toContactOptions'
import { getCohortAction } from '../actions/getCohort'
import { listCohortRegistrationsAction } from
  '../actions/listCohortRegistrations'
import { listCohortFoldersAction } from '../actions/listCohortFolders'
import { CohortDetailView } from '../components/CohortDetailView'

// Server-side load for a cohort, its registrations, its resource folders,
// and the contacts the reserve-a-seat picker searches.
export async function CohortDetailServer({ params }) {
  const { id } = await params
  const cohort = await getCohortAction(id)

  if (!cohort) {
    return <Text>Cohort not found.</Text>
  }

  const registrations = await listCohortRegistrationsAction(id)
  const folders = await listCohortFoldersAction(id)
  const contacts = toContactOptions(await listContacts())

  return <CohortDetailView cohort={cohort} registrations={registrations}
    folders={folders} contacts={contacts} />
}
