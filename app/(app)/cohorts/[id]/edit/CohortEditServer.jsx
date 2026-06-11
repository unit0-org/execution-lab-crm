import { Text } from '@/ui/atoms/Text'
import { getCohortAction } from '../../actions/getCohort'
import { CohortFormView } from '../../components/CohortFormView'

// Server-side load of the cohort being edited, then the form page.
export async function CohortEditServer({ params }) {
  const { id } = await params
  const cohort = await getCohortAction(id)

  if (!cohort) {
    return <Text>Cohort not found.</Text>
  }

  return <CohortFormView cohort={cohort} />
}
