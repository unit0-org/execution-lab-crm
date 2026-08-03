import { Text } from '@/ui/atoms/Text'
import { ReservedSeatNote } from './ReservedSeatNote'

// How long this applicant's seat is held. Someone completing a reserved
// seat is on a different deal from someone starting a checkout, and is
// told their own date rather than the 2-hour hold. Nothing when the
// cohort doesn't hold at all.
export function SeatHoldNote({ hours, reservedUntil }) {
  if (reservedUntil) return <ReservedSeatNote until={reservedUntil} />

  if (!hours) return null

  return (
    <Text tone="muted" size={13}>
      Your seat is held for {hours} hours while you complete payment, then it
      is released for someone else.
    </Text>
  )
}
