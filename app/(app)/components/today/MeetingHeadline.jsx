import { Text } from '@/ui/Text'

const dayLabel = (iso) => new Date(iso).toLocaleString('en', { weekday: 'long' })
const minutes  = (n) => n ? ` (${Math.round(n)} min)` : ''
const venue    = (loc) => loc ? ` at ${loc}` : ''

const primaryName = (attendees) => {
  const named = attendees.find((a) => a.contacts?.display_name)
  if (named) return named.contacts.display_name
  const first = attendees[0]

  return first?.email || 'someone'
}

const othersSuffix = (count) => count > 1 ? ` (+${count - 1} others)` : ''

export function MeetingHeadline({ row }) {
  const name   = primaryName(row.attendees || [])
  const others = othersSuffix((row.attendees || []).length)

  return (
    <Text>
      You met with <strong>{name}</strong>{others} on {dayLabel(row.started_at)}
      {venue(row.location)}{minutes(row.duration_minutes)}.
    </Text>
  )
}
