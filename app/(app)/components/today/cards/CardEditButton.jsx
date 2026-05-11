'use client'

import { useState } from 'react'
import { TextButton } from '@/ui/TextButton'
import { Textarea } from '@/ui/Textarea'
import { Stack } from '@/ui/Stack'
import { SubmitButton } from '@/ui/SubmitButton'
import { FeedbackForm } from '@/ui/FeedbackForm'
import { editCardAction } from '../../../actions/cards'

const editField = (payload) => payload.text || payload.body || payload.reason || payload.name || ''

export function CardEditButton({ card, fieldName = 'text' }) {
  const [open, setOpen] = useState(false)
  const value = editField(card.edited_payload || card.payload)
  if (!open) return <TextButton type="button" onClick={() => setOpen(true)}>Edit</TextButton>

  return (
    <FeedbackForm action={editCardAction} success="Edited.">
      <input type="hidden" name="card_id" value={card.id} />
      <input type="hidden" name="edited_payload"
             value={JSON.stringify({ ...card.payload, [fieldName]: value })} />
      <Stack gap="sm">
        <Textarea name={fieldName} defaultValue={value} rows={3} />
        <SubmitButton size="sm">Save edit</SubmitButton>
      </Stack>
    </FeedbackForm>
  )
}
