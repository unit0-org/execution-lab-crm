'use client'

import { Form } from '@/ui/molecules/Form'
import { IconButton } from '@/ui/atoms/IconButton'
import { Icon } from '@/ui/atoms/Icon'
import { useFormAction } from '../hooks/useFormAction'
import { removeParticipantAction } from '../actions/removeParticipant'

export function RemoveParticipant({ id, onChanged }) {
  const { action } = useFormAction(removeParticipantAction, onChanged)

  return (
    <Form action={action}>
      <input type="hidden" name="id" value={id} />
      <IconButton type="submit" tone="danger" label="Remove participant">
        <Icon name="close" size={14} />
      </IconButton>
    </Form>
  )
}
