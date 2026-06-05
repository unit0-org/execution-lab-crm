'use client'

import { TextField } from '@/ui/atoms/TextField'

export function ContactSearch({ value, onChange }) {
  const update = (e) => onChange(e.target.value)

  return (
    <TextField name="q" value={value} onChange={update}
      aria-label="Search contacts" placeholder="Search contacts" />
  )
}
