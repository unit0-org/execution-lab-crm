'use client'

import { Form } from '@/ui/molecules/Form'
import { Stack } from '@/ui/layout/Stack'
import { NoteFields } from './NoteFields'
import { NoteFormHeading } from './NoteFormHeading'
import { FormError } from './FormError'
import { FormActions } from '@/ui/molecules/FormActions'
import { useFormAction } from '@/app/(app)/hooks/useFormAction'
import { useMentionOptions } from '../hooks/useMentionOptions'
import { addNoteAction } from '../actions/addNote'

export function NoteForm(props) {
  const { contactId, heading, label = 'Add', onSaved, onCancel } = props
  const { action, error } = useFormAction(addNoteAction, onSaved)
  const options = useMentionOptions()

  return (
    <Form action={action}>
      <input type="hidden" name="contact_id" value={contactId} />
      <Stack gap="md">
        <NoteFormHeading text={heading} />
        <NoteFields options={options} />
        <FormError message={error} />
        <FormActions label={label} onCancel={onCancel} />
      </Stack>
    </Form>
  )
}
