import { Inline } from '@/ui/layout/Inline'
import { Heading } from '@/ui/atoms/Heading'
import { IconButton } from '@/ui/atoms/IconButton'
import { Icon } from '@/ui/atoms/Icon'

export function RelationshipHeader({ onAdd }) {
  return (
    <Inline gap="sm">
      <Heading level={3} gutter="none">Relationships</Heading>
      <IconButton label="Add relationship" onClick={onAdd}>
        <Icon name="plus" size={16} />
      </IconButton>
    </Inline>
  )
}
