import { Inline } from '@/ui/layout/Inline'
import { Heading } from '@/ui/atoms/Heading'
import { IconButton } from '@/ui/atoms/IconButton'
import { Icon } from '@/ui/atoms/Icon'

export function FilesHeader({ onAdd }) {
  return (
    <Inline gap="sm">
      <Heading level={3} gutter="none">Files</Heading>
      <IconButton label="Add file" onClick={onAdd}>
        <Icon name="plus" size={16} />
      </IconButton>
    </Inline>
  )
}
