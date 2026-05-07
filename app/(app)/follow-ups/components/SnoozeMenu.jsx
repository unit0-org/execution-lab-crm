import { Inline } from '@/ui/Inline'
import { Text } from '@/ui/Text'
import { SNOOZE_OPTIONS } from '@/lib/follow_ups/snoozeOptions'
import { SnoozeButton } from './SnoozeButton'

export function SnoozeMenu({ flagId }) {
  return (
    <Inline gap="sm">
      <Text tone="muted" size="sm">Snooze:</Text>
      {SNOOZE_OPTIONS.map((opt) => (
        <SnoozeButton key={opt.label} flagId={flagId} option={opt} />
      ))}
    </Inline>
  )
}
