import { Inline } from '@/ui/layout/Inline'
import { AttendeeToken } from './AttendeeToken'

// The chosen attendees as removable tokens; nothing when empty.
export function AttendeeChips({ chosen, onRemove }) {
  if (!chosen.length) return null

  return (
    <Inline gap="sm">
      {chosen.map((item) => (
        <AttendeeToken key={item.value} item={item} onRemove={onRemove} />
      ))}
    </Inline>
  )
}
