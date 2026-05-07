'use client'

import { useTransition } from 'react'
import { Chip } from '@/ui/Chip'
import { Inline } from '@/ui/Inline'
import { InlineForm } from '@/ui/InlineForm'
import { IconButton } from '@/ui/IconButton'
import { removeContactType } from '../actions'

const wrapInTransition = (fn, after, start) => (formData) =>
  start(async () => { await fn(formData); after?.() })

export function ContactTypeChip({ contactId, type, onMutate }) {
  const [, start] = useTransition()
  const onRemove = wrapInTransition(removeContactType, onMutate, start)

  return (
    <Inline gap="sm">
      <Chip color={type.color}>{type.name}</Chip>
      <InlineForm action={onRemove}>
        <input type="hidden" name="contact_id" value={contactId} />
        <input type="hidden" name="type_id" value={type.id} />
        <IconButton type="submit" label="Remove type">×</IconButton>
      </InlineForm>
    </Inline>
  )
}
