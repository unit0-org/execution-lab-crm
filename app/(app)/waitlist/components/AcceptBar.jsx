'use client'

import { Inline } from '@/ui/layout/Inline'
import { Button } from '@/ui/atoms/Button'
import { Text } from '@/ui/atoms/Text'
import { isAccepted } from './isAccepted'

// Footer action: accept this applicant into their cohort (which opens the
// payment-email preview first). Once accepted, shows a quiet status note.
export function AcceptBar({ entry, onAccept }) {
  if (isAccepted(entry))
    return <Text tone="muted" size="sm">Already accepted.</Text>

  return (
    <Inline gap="sm">
      <Button tone="primary" size="sm" onClick={() => onAccept(entry)}>
        Accept into cohort
      </Button>
    </Inline>
  )
}
