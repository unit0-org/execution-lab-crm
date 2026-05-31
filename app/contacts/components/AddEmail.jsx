'use client'

import { Form } from '@/ui/molecules/Form'
import { TextField } from '@/ui/atoms/TextField'
import { Button } from '@/ui/atoms/Button'
import { Inline } from '@/ui/layout/Inline'
import { useFormAction } from '../hooks/useFormAction'
import { addEmailAction } from '../actions/addEmail'

export function AddEmail({ contactId, onChanged }) {
  const { action } = useFormAction(addEmailAction, onChanged)

  return (
    <Form action={action}>
      <input type="hidden" name="contact_id" value={contactId} />
      <Inline gap="sm">
        <TextField label="Add email" name="email" type="email" />
        <Button type="submit" size="sm">Add</Button>
      </Inline>
    </Form>
  )
}
