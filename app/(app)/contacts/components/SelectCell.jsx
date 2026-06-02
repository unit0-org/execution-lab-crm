'use client'

import { Td } from '@/ui/molecules/Td'
import { Checkbox } from '@/ui/atoms/Checkbox'

export function SelectCell({ checked, onToggle }) {
  return (
    <Td>
      <Checkbox checked={checked} onChange={onToggle} label="Select row" />
    </Td>
  )
}
