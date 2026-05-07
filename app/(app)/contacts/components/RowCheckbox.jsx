'use client'

import { Checkbox } from '@/ui/Checkbox'

export function RowCheckbox({ contact, selection }) {
  return (
    <Checkbox
      label={`Select ${contact.display_name || 'contact'}`}
      checked={selection.has(contact.id)}
      onChange={() => selection.toggle(contact.id)}
    />
  )
}
