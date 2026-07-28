import { Inline } from '@/ui/layout/Inline'
import { CohortEditButton } from './CohortEditButton'
import { CohortDeleteButton } from './CohortDeleteButton'

// The controls at the end of a cohort row: edit, then delete.
export function CohortRowActions({ cohort, onChanged }) {
  return (
    <Inline gap="xs" nowrap>
      <CohortEditButton cohort={cohort} />
      <CohortDeleteButton cohort={cohort} onChanged={onChanged} />
    </Inline>
  )
}
