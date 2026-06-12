'use client'

import { Td } from './Td'
import { Checkbox } from '../atoms/Checkbox'

export function SelectCell({ checked, onToggle }) {
  return (
    <Td>
      <Checkbox checked={checked} onChange={onToggle} label="Select row" />
    </Td>
  )
}
