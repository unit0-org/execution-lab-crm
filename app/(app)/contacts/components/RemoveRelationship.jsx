'use client'

import { Form } from '@/ui/molecules/Form'
import { IconButton } from '@/ui/atoms/IconButton'
import { Icon } from '@/ui/atoms/Icon'
import { useFormAction } from '@/app/(app)/hooks/useFormAction'
import { removeRelationshipAction } from '../actions/removeRelationship'

export function RemoveRelationship({ id, onChanged }) {
  const { action } = useFormAction(removeRelationshipAction, onChanged)

  return (
    <Form action={action}>
      <input type="hidden" name="id" value={id} />
      <IconButton type="submit" tone="danger" label="Remove relationship">
        <Icon name="trash" size={16} />
      </IconButton>
    </Form>
  )
}
