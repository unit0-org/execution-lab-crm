'use client'

import { Form } from '@/ui/molecules/Form'
import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { FormError } from './FormError'
import { NameFields } from './NameFields'
import { DialogActions } from './DialogActions'
import { useFormAction } from '../hooks/useFormAction'
import { updateContactNameAction } from '../actions/updateContactName'

export function EditNameForm({ contact, onSaved, onCancel }) {
  const { action, error } = useFormAction(updateContactNameAction, onSaved)

  return (
    <Form action={action}>
      <input type="hidden" name="id" value={contact.id} />
      <Stack gap="md">
        <Heading level={3}>Edit name</Heading>
        <NameFields contact={contact} />
        <FormError message={error} />
        <DialogActions label="Save" onCancel={onCancel} />
      </Stack>
    </Form>
  )
}
