import { Inline } from '@/ui/layout/Inline'
import { Text } from '@/ui/atoms/Text'
import { IconButton } from '@/ui/atoms/IconButton'
import { Icon } from '@/ui/atoms/Icon'

export function PhoneHeader({ onAdd }) {
  return (
    <Inline gap="sm">
      <Text size="sm" tone="muted">Phones</Text>
      <IconButton label="Add phone" onClick={onAdd}>
        <Icon name="plus" size={16} />
      </IconButton>
    </Inline>
  )
}
