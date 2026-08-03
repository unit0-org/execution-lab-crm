import { Text } from '@/ui/atoms/Text'

// For someone completing a seat that was reserved for them: the place is
// already theirs, and this is the day it goes if they don't finish.
export function ReservedSeatNote({ until }) {
  return (
    <Text tone="muted" size={13}>
      Your seat is reserved for you until {until}. Complete your
      registration before then to keep it.
    </Text>
  )
}
