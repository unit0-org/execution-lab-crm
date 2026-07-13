import { Stack } from '@/ui/layout/Stack'
import { Text } from '@/ui/atoms/Text'
import { AutomationRow } from './AutomationRow'

export function AutomationList({ automations, onChanged }) {
  if (!automations.length) {
    return <Text tone="muted">No automations yet.</Text>
  }

  return (
    <Stack gap="sm">
      {automations.map((automation) => (
        <AutomationRow key={automation.id} automation={automation}
          onChanged={onChanged} />
      ))}
    </Stack>
  )
}
