import { Text } from '@/ui/atoms/Text'

// For pay-to-confirm cohorts: tells the applicant their seat is reserved
// only while they finish payment. Nothing when the cohort doesn't hold.
export function SeatHoldNote({ hours }) {
  if (!hours) return null

  return (
    <Text tone="muted" size={13}>
      Your seat is held for {hours} hours while you complete payment, then it
      is released for someone else.
    </Text>
  )
}
