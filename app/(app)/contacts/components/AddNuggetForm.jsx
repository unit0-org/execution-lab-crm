'use client'

import { Form } from '@/ui/molecules/Form'
import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { FormError } from './FormError'
import { NuggetFields } from './NuggetFields'
import { DialogActions } from './DialogActions'
import { useFormAction } from '@/app/(app)/hooks/useFormAction'
import { addNuggetAction } from '../actions/addNugget'

export function AddNuggetForm({ contactId, onSaved, onCancel }) {
  const { action, error } = useFormAction(addNuggetAction, onSaved)

  return (
    <Form action={action}>
      <input type="hidden" name="contact_id" value={contactId} />
      <Stack gap="md">
        <Heading level={3}>Add nugget</Heading>
        <NuggetFields />
        <FormError message={error} />
        <DialogActions label="Add" onCancel={onCancel} />
      </Stack>
    </Form>
  )
}
