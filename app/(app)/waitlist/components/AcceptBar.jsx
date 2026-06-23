'use client'

import { Stack } from '@/ui/layout/Stack'
import { Text } from '@/ui/atoms/Text'
import { CohortPicker } from './CohortPicker'
import { AcceptButton } from './AcceptButton'
import { isAccepted } from './isAccepted'
import { useCohortChoice } from '../hooks/useCohortChoice'

// Footer action: choose a cohort and accept this applicant into it (which
// opens the payment-email preview first). Warns before overfilling a full
// cohort; shows a quiet note once already accepted.
export function AcceptBar({ entry, cohorts, onAccept }) {
  const choice = useCohortChoice(entry, cohorts)

  if (isAccepted(entry))
    return <Text tone="muted" size="sm">Already accepted.</Text>

  return (
    <Stack gap="sm">
      <CohortPicker choice={choice} />
      <AcceptButton full={choice.full}
        onAccept={() => onAccept(entry, choice.cohortId)} />
    </Stack>
  )
}
