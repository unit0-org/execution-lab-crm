import { Inline } from '@/ui/layout/Inline'
import { Icon } from '@/ui/atoms/Icon'
import { MonoLabel } from '@/ui/atoms/MonoLabel'

// A folder's title row: a folder glyph beside its uppercased name.
export function MemberFolderHeader({ name }) {
  return (
    <Inline gap="xs" nowrap>
      <Icon name="folder" size={16} />
      <MonoLabel size={12} tone="primary" caps>{name}</MonoLabel>
    </Inline>
  )
}
