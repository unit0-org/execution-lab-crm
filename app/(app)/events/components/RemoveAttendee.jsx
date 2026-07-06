'use client'

import { Form } from '@/ui/molecules/Form'
import { IconButton } from '@/ui/atoms/IconButton'
import { Icon } from '@/ui/atoms/Icon'
import { useFormAction } from '../hooks/useFormAction'
import { removeAttendeeAction } from '../actions/removeAttendee'

export function RemoveAttendee({ id, onChanged }) {
  const { action } = useFormAction(removeAttendeeAction, onChanged)

  return (
    <Form action={action}>
      <input type="hidden" name="id" value={id} />
      <IconButton type="submit" tone="danger" label="Remove attendee">
        <Icon name="close" size={14} />
      </IconButton>
    </Form>
  )
}
