'use client'

import { Form } from '@/ui/molecules/Form'
import { Stack } from '@/ui/layout/Stack'
import { SubmitButton } from '@/ui/atoms/SubmitButton'
import { NoteFields } from '../contacts/components/NoteFields'
import { FormError } from '../contacts/components/FormError'
import { useFormAction } from '../contacts/hooks/useFormAction'
import { addNoteAction } from '../contacts/actions/addNote'

export function LogNoteForm({ contactId, onSaved }) {
  const { action, error } = useFormAction(addNoteAction, onSaved)

  return (
    <Form action={action}>
      <input type="hidden" name="contact_id" value={contactId} />
      <Stack gap="md">
        <NoteFields />
        <FormError message={error} />
        <SubmitButton tone="primary" size="sm">Log</SubmitButton>
      </Stack>
    </Form>
  )
}
