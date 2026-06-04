import { Text } from '@/ui/atoms/Text'

// A muted "+N more" note, or nothing when there's no overflow.
export function MoreNote({ more }) {
  if (!more) return null

  return <Text tone="muted" size="sm">{`+${more} more`}</Text>
}
