'use client'

import { Form } from '@/ui/molecules/Form'
import { IconButton } from '@/ui/atoms/IconButton'
import { Icon } from '@/ui/atoms/Icon'
import { useFormAction } from '@/app/(app)/hooks/useFormAction'

// A no-confirm trash button that submits a form action to remove a row
// (email, phone, relationship); onChanged fires after a successful submit.
export function FormDelete({ action, id, label, onChanged }) {
  const { action: submit } = useFormAction(action, onChanged)

  return (
    <Form action={submit}>
      <input type="hidden" name="id" value={id} />
      <IconButton type="submit" tone="danger" label={label}>
        <Icon name="trash" size={16} />
      </IconButton>
    </Form>
  )
}
