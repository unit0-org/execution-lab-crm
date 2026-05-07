'use client'

import { useTransition } from 'react'
import { Chip } from '@/ui/Chip'
import { Inline } from '@/ui/Inline'
import { InlineForm } from '@/ui/InlineForm'
import { IconButton } from '@/ui/IconButton'
import { removeContactLabel } from '../actions'

const wrapInTransition = (fn, after, start) => (formData) =>
  start(async () => { await fn(formData); after?.() })

export function ContactLabelChip({ contactId, label, onMutate }) {
  const [, start] = useTransition()
  const onRemove = wrapInTransition(removeContactLabel, onMutate, start)

  return (
    <Inline gap="sm">
      <Chip color={label.color}>{label.name}</Chip>
      <InlineForm action={onRemove}>
        <input type="hidden" name="contact_id" value={contactId} />
        <input type="hidden" name="label_id" value={label.id} />
        <IconButton type="submit" label="Remove label">×</IconButton>
      </InlineForm>
    </Inline>
  )
}
