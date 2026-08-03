import { Text } from '@/ui/atoms/Text'
import { DateText } from '@/ui/atoms/DateText'
import { holdEndsAt } from '@/lib/registration/models/holdEndsAt'

// When a reserved seat is released, so the roster answers "how long have
// they got?" without arithmetic. Only a live reservation says it — a
// 2-hour self-serve hold is over before anyone reads the row, and a seat
// that already lapsed or was cancelled has no date left to count down to.
export function HoldEndsNote({ registration, status }) {
  if (status !== 'reserved') return null

  return (
    <Text tone="muted" size={12}>
      until <DateText value={holdEndsAt(registration)} />
    </Text>
  )
}
