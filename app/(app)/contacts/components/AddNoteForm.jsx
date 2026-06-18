'use client'

import { Form } from '@/ui/molecules/Form'
import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { FormError } from './FormError'
import { NoteFields } from './NoteFields'
import { DialogActions } from './DialogActions'
import { useFormAction } from '../hooks/useFormAction'
import { useMentionOptions } from '../hooks/useMentionOptions'
import { addNoteAction } from '../actions/addNote'

export function AddNoteForm({ contactId, onSaved, onCancel }) {
  const { action, error } = useFormAction(addNoteAction, onSaved)
  const options = useMentionOptions()

  return (
    <Form action={action}>
      <input type="hidden" name="contact_id" value={contactId} />
      <Stack gap="md">
        <Heading level={3}>Add note</Heading>
        <NoteFields options={options} />
        <FormError message={error} />
        <DialogActions label="Add" onCancel={onCancel} />
      </Stack>
    </Form>
  )
}
