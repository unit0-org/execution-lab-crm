import { Inline } from '@/ui/layout/Inline'
import { Heading } from '@/ui/atoms/Heading'
import { IconButton } from '@/ui/atoms/IconButton'
import { Icon } from '@/ui/atoms/Icon'

export function KnowHeader({ onAdd }) {
  return (
    <Inline gap="sm">
      <Heading level={3} gutter="none">What we know</Heading>
      <IconButton label="Add nugget" onClick={onAdd}>
        <Icon name="plus" size={16} />
      </IconButton>
    </Inline>
  )
}
