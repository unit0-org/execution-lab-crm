'use client'

import { Form } from '@/ui/molecules/Form'
import { IconButton } from '@/ui/atoms/IconButton'
import { Icon } from '@/ui/atoms/Icon'
import { useFormAction } from '../hooks/useFormAction'
import { removeMeetingNoteAction } from '../actions/removeMeetingNote'

export function RemoveNote({ id, onChanged }) {
  const { action } = useFormAction(removeMeetingNoteAction, onChanged)

  return (
    <Form action={action}>
      <input type="hidden" name="id" value={id} />
      <IconButton type="submit" tone="danger" label="Remove note">
        <Icon name="trash" size={14} />
      </IconButton>
    </Form>
  )
}
