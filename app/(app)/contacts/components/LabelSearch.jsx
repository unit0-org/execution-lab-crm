'use client'

import { TextField } from '@/ui/atoms/TextField'

export function LabelSearch({ value, onChange }) {
  const type = (e) => onChange(e.target.value)

  return (
    <TextField value={value} onChange={type} autoFocus
      aria-label="Search labels" placeholder="Search labels" />
  )
}
