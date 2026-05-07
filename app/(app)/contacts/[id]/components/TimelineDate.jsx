import { Text } from '@/ui/Text'

const fmt = (iso) =>
  new Date(iso).toLocaleDateString(undefined, {
    month: 'short', day: 'numeric', year: 'numeric',
  })

export function TimelineDate({ iso }) {
  return <Text tone="muted" size="sm">{fmt(iso)}</Text>
}
