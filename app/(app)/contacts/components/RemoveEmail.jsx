'use client'

import { Form } from '@/ui/molecules/Form'
import { IconButton } from '@/ui/atoms/IconButton'
import { Icon } from '@/ui/atoms/Icon'
import { useFormAction } from '../hooks/useFormAction'
import { removeEmailAction } from '../actions/removeEmail'

export function RemoveEmail({ emailId, onChanged }) {
  const { action } = useFormAction(removeEmailAction, onChanged)

  return (
    <Form action={action}>
      <input type="hidden" name="id" value={emailId} />
      <IconButton type="submit" tone="danger" label="Remove email">
        <Icon name="trash" size={16} />
      </IconButton>
    </Form>
  )
}
