'use client'

import { Form } from '@/ui/molecules/Form'
import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { FormError } from './FormError'
import { NoteFields } from './NoteFields'
import { DialogActions } from './DialogActions'
import { useFormAction } from '../hooks/useFormAction'
import { updateNoteAction } from '../actions/updateNote'

export function EditNoteForm({ note, onSaved, onCancel }) {
  const { action, error } = useFormAction(updateNoteAction, onSaved)

  return (
    <Form action={action}>
      <input type="hidden" name="id" value={note.id} />
      <Stack gap="md">
        <Heading level={3}>Edit note</Heading>
        <NoteFields body={note.body} />
        <FormError message={error} />
        <DialogActions label="Save" onCancel={onCancel} />
      </Stack>
    </Form>
  )
}
