import { GrowRow } from '@/ui/layout/GrowRow'
import { CohortHeader } from './CohortHeader'
import { CohortEditButton } from './CohortEditButton'

// The detail header: the cohort summary with an edit action on the right.
export function CohortDetailHeader({ cohort }) {
  return (
    <GrowRow align="start">
      <CohortHeader cohort={cohort} />
      <CohortEditButton cohort={cohort} />
    </GrowRow>
  )
}
