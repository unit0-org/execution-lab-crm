'use client'

import { Form } from '@/ui/molecules/Form'
import { IconButton } from '@/ui/atoms/IconButton'
import { Icon } from '@/ui/atoms/Icon'
import { useFormAction } from '@/app/(app)/hooks/useFormAction'
import { removePhoneAction } from '../actions/removePhone'

export function RemovePhone({ phoneId, onChanged }) {
  const { action } = useFormAction(removePhoneAction, onChanged)

  return (
    <Form action={action}>
      <input type="hidden" name="id" value={phoneId} />
      <IconButton type="submit" tone="danger" label="Remove phone">
        <Icon name="trash" size={16} />
      </IconButton>
    </Form>
  )
}
