'use client'

import { Form } from '@/ui/molecules/Form'
import { TextField } from '@/ui/atoms/TextField'
import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { FormError } from './FormError'
import { DialogActions } from './DialogActions'
import { useFormAction } from '../hooks/useFormAction'
import { updateNuggetAction } from '../actions/updateNugget'

export function EditNuggetForm({ nugget, onSaved, onCancel }) {
  const { action, error } = useFormAction(updateNuggetAction, onSaved)
  const question = nugget.question || ''

  return (
    <Form action={action}>
      <input type="hidden" name="id" value={nugget.id} />
      <Stack gap="md">
        <Heading level={3}>Edit nugget</Heading>
        <TextField name="label" autoFocus defaultValue={question}
          placeholder="Question or label (optional)" />
        <TextField name="value" defaultValue={nugget.answer}
          placeholder="Value" required />
        <FormError message={error} />
        <DialogActions label="Save" onCancel={onCancel} />
      </Stack>
    </Form>
  )
}
