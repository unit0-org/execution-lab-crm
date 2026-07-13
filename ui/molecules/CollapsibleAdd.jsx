'use client'

import { IconButton } from '../atoms/IconButton'
import { Icon } from '../atoms/Icon'

// The `+` inside a Collapsible's summary row. Any click inside a <summary>
// toggles the panel, so it swallows the event before opening the create
// flow — every Collapsible's add action behaves the same way.
export function CollapsibleAdd({ label, onAdd }) {
  if (!onAdd) return null

  const add = (event) => {
    event.preventDefault()
    event.stopPropagation()
    onAdd()
  }

  return (
    <IconButton tone="primary" label={label} onClick={add}>
      <Icon name="plus" size={18} />
    </IconButton>
  )
}
