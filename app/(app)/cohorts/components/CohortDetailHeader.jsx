import { PageHeader } from '@/ui/organisms/PageHeader'
import { CohortHeader } from './CohortHeader'
import { CohortEditButton } from './CohortEditButton'

// The detail header: the cohort summary with an edit action on the right.
export function CohortDetailHeader({ cohort }) {
  return (
    <PageHeader title={<CohortHeader cohort={cohort} />}
      actions={<CohortEditButton cohort={cohort} />} />
  )
}
