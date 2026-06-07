'use client'

import { Inline } from '@/ui/layout/Inline'
import { TextField } from '@/ui/atoms/TextField'

export function InvoiceDateFields({ fields }) {
  return (
    <Inline gap="sm">
      <TextField label="Issue date" type="date"
        value={fields.issuedAt} onChange={fields.onIssued} />
      <TextField label="Due date" type="date"
        value={fields.dueAt} onChange={fields.onDue} />
    </Inline>
  )
}
