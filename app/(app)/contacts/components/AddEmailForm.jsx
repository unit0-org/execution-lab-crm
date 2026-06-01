'use client'

import { Form } from '@/ui/molecules/Form'
import { TextField } from '@/ui/atoms/TextField'
import { GrowRow } from '@/ui/layout/GrowRow'
import { FormError } from './FormError'
import { AddEmailButtons } from './AddEmailButtons'
import { useFormAction } from '../hooks/useFormAction'
import { addEmailAction } from '../actions/addEmail'

export function AddEmailForm({ contactId, onSaved, onCancel }) {
  const { action, error } = useFormAction(addEmailAction, onSaved)

  return (
    <Form action={action}>
      <input type="hidden" name="contact_id" value={contactId} />
      <GrowRow>
        <TextField name="email" type="email" placeholder="Add email"
          autoFocus />
        <AddEmailButtons onCancel={onCancel} />
      </GrowRow>
      <FormError message={error} />
    </Form>
  )
}
