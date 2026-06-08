'use client'

import { TextField } from '@/ui/atoms/TextField'

export function InvoiceNumberField({ fields }) {
  return (
    <TextField label="Invoice number" value={fields.number}
      onChange={fields.onNumber} />
  )
}
