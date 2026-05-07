import { Text } from '@/ui/Text'

const fmt = (iso) =>
  new Date(iso).toLocaleString(undefined, {
    weekday: 'short', month: 'short', day: 'numeric',
    hour: '2-digit', minute: '2-digit',
  })

export function MeetingTime({ iso }) {
  return <Text tone="muted" size="sm">{fmt(iso)}</Text>
}
