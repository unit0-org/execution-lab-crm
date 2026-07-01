import { Icon } from '@/ui/atoms/Icon'
import { Inline } from '@/ui/layout/Inline'

// Folder glyph + name for a collapsible folder's clickable header.
export function MemberFolderTitle({ name }) {
  return (
    <Inline gap="sm" nowrap>
      <Icon name="folder" size={16} />
      {name}
    </Inline>
  )
}
