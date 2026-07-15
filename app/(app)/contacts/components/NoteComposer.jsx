'use client'

import { Form } from '@/ui/molecules/Form'
import { GrowRow } from '@/ui/layout/GrowRow'
import { MentionField } from '@/ui/molecules/MentionField'
import { SubmitButton } from '@/ui/atoms/SubmitButton'
import { FormError } from './FormError'
import { useFormAction } from '@/app/(app)/hooks/useFormAction'
import { useMentionOptions } from '../hooks/useMentionOptions'
import { addNoteAction } from '../actions/addNote'

// The always-present composer at the top of the notes thread — a comment
// box (type @ to tag a teammate), matching the Figma. A new note is dated
// now, so there is no date field.
export function NoteComposer({ contactId, onSaved }) {
  const { action, error } = useFormAction(addNoteAction, onSaved)
  const options = useMentionOptions()

  return (
    <Form action={action}>
      <input type="hidden" name="contact_id" value={contactId} />
      <GrowRow align="end">
        <MentionField name="body" idsName="mention_user_ids" rows={2}
          options={options} required aria-label="Add a note"
          placeholder="Add a note — type @ to tag a teammate" />
        <SubmitButton size="sm">Add</SubmitButton>
      </GrowRow>
      <FormError message={error} />
    </Form>
  )
}
