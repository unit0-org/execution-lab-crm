import { Icon } from '@/ui/atoms/Icon'

// Folder glyph + name for a collapsible folder's clickable header.
export function MemberFolderTitle({ name }) {
  return (
    <>
      <Icon name="folder" size={16} /> {name}
    </>
  )
}
