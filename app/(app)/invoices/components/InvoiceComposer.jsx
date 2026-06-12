'use client'

import { Stack } from '@/ui/layout/Stack'
import { Text } from '@/ui/atoms/Text'
import { TextField } from '@/ui/atoms/TextField'
import { TextArea } from '@/ui/atoms/TextArea'

export function InvoiceComposer({ draft, onEdit }) {
  if (draft.error)
    return <Text tone="muted" size="sm">{draft.error}</Text>

  const set = (field) => (e) => onEdit(draft.id, field, e.target.value)

  return (
    <Stack gap="sm">
      <TextField label="To" value={draft.to} onChange={set('to')} />
      <TextField label="Cc" value={draft.cc} onChange={set('cc')} />
      <TextField label="Subject" value={draft.subject}
        onChange={set('subject')} />
      <TextArea label="Message" rows={8} value={draft.body}
        onChange={set('body')} />
    </Stack>
  )
}
