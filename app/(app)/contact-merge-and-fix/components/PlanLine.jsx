import { Inline } from '@/ui/layout/Inline'
import { Text } from '@/ui/atoms/Text'
import { SavedCheck } from '@/ui/atoms/SavedCheck'

// One line of the plan, with the check that ticks on the moment that line
// lands. The check's space is reserved from the start, so a running batch
// never shifts the list under the person reading it.
export function PlanLine({ done, children }) {
  return (
    <Inline gap="xs" nowrap>
      <SavedCheck show={done} />
      <Text size="sm">{children}</Text>
    </Inline>
  )
}
