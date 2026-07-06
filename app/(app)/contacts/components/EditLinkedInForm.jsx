'use client'

import { Form } from '@/ui/molecules/Form'
import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { TextField } from '@/ui/atoms/TextField'
import { FormError } from './FormError'
import { DialogActions } from './DialogActions'
import { useFormAction } from '@/app/(app)/hooks/useFormAction'
import { updateContactAction } from '../actions/updateContact'

export function EditLinkedInForm({ contactId, url, onSaved, onCancel }) {
  const { action, error } = useFormAction(updateContactAction, onSaved)
  const current = url || ''

  return (
    <Form action={action}>
      <input type="hidden" name="id" value={contactId} />
      <input type="hidden" name="field" value="linkedin_url" />
      <Stack gap="md">
        <Heading level={3}>Edit LinkedIn</Heading>
        <TextField label="LinkedIn URL" name="value"
          defaultValue={current} autoFocus />
        <FormError message={error} />
        <DialogActions label="Save" onCancel={onCancel} />
      </Stack>
    </Form>
  )
}
