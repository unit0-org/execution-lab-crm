import { Inline } from '../layout/Inline'
import { Heading } from '../atoms/Heading'
import { IconButton } from '../atoms/IconButton'
import { Icon } from '../atoms/Icon'

function AddButton({ label, onAdd }) {
  if (!onAdd) return null

  return (
    <IconButton tone="primary" label={label} onClick={onAdd}>
      <Icon name="plus" size={18} />
    </IconButton>
  )
}

// A section heading with an optional "+" action that opens a create form.
export function SectionHeader({ title, addLabel, onAdd }) {
  return (
    <Inline gap="sm">
      <Heading gutter="none">{title}</Heading>
      <AddButton label={addLabel} onAdd={onAdd} />
    </Inline>
  )
}
