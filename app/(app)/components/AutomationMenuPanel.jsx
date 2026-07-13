import { Stack } from '@/ui/layout/Stack'
import { Text } from '@/ui/atoms/Text'
import { Icon } from '@/ui/atoms/Icon'
import { MenuRow } from '@/ui/molecules/MenuRow'

// The lightning menu's contents: a heading and the "Actions" entry.
export function AutomationMenuPanel({ onActions }) {
  return (
    <Stack gap="xs">
      <Text size="sm" tone="muted">Automation</Text>
      <MenuRow leading={<Icon name="bolt" size={16} />} label="Actions"
        onClick={onActions} />
    </Stack>
  )
}
