'use client'

import { Form } from '@/ui/molecules/Form'
import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { FormError } from './FormError'
import { NuggetFields } from './NuggetFields'
import { DialogActions } from './DialogActions'
import { useFormAction } from '../hooks/useFormAction'
import { updateNuggetAction } from '../actions/updateNugget'

export function EditNuggetForm({ nugget, onSaved, onCancel }) {
  const { action, error } = useFormAction(updateNuggetAction, onSaved)

  return (
    <Form action={action}>
      <input type="hidden" name="id" value={nugget.id} />
      <Stack gap="md">
        <Heading level={3}>Edit nugget</Heading>
        <NuggetFields label={nugget.question} value={nugget.answer} />
        <FormError message={error} />
        <DialogActions label="Save" onCancel={onCancel} />
      </Stack>
    </Form>
  )
}
