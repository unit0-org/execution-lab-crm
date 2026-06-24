import { Text } from '@/ui/atoms/Text'
import { getCohortAction } from '../actions/getCohort'
import { listCohortRegistrationsAction } from
  '../actions/listCohortRegistrations'
import { listCohortFoldersAction } from '../actions/listCohortFolders'
import { CohortDetailView } from '../components/CohortDetailView'

// Server-side load for a cohort, its registrations, and its resource folders.
export async function CohortDetailServer({ params }) {
  const { id } = await params
  const cohort = await getCohortAction(id)

  if (!cohort) {
    return <Text>Cohort not found.</Text>
  }

  const registrations = await listCohortRegistrationsAction(id)
  const folders = await listCohortFoldersAction(id)

  return <CohortDetailView cohort={cohort} registrations={registrations}
    folders={folders} />
}
