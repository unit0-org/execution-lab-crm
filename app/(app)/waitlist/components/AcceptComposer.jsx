'use client'

import { Stack } from '@/ui/layout/Stack'
import { TextField } from '@/ui/atoms/TextField'
import { TextArea } from '@/ui/atoms/TextArea'

// Editable fields for the acceptance payment email before it's sent.
export function AcceptComposer({ draft, onEdit }) {
  const set = (field) => (e) => onEdit(field, e.target.value)

  return (
    <Stack gap="sm">
      <TextField label="To" value={draft.to} onChange={set('to')} />
      <TextField label="Subject" value={draft.subject}
        onChange={set('subject')} />
      <TextArea label="Message" rows={10} value={draft.body}
        onChange={set('body')} />
    </Stack>
  )
}
