import { Text } from '@/ui/atoms/Text'
import { TOP_EVENTS } from './topEvents'

// Says what the table left out, so the cap is never silent.
export function BestEventsFootnote({ events }) {
  if (events.length <= TOP_EVENTS) return null

  const more = `of ${events.length} attended events`

  return (
    <Text tone="muted" size="sm" gutter="none">
      {`Top ${TOP_EVENTS} ${more}, by attendee → client rate.`}
    </Text>
  )
}
