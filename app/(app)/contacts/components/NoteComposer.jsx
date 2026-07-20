'use client'
import { useState } from 'react'
import { BareForm } from '@/ui/molecules/BareForm'
import { Stack } from '@/ui/layout/Stack'
import { MentionField } from '@/ui/molecules/MentionField'
import { FormError } from './FormError'
import { NoteSendButton } from './NoteSendButton'
import { useFormAction } from '@/app/(app)/hooks/useFormAction'
import { useMentionOptions } from '../hooks/useMentionOptions'
import { addNoteAction } from '../actions/addNote'

// Always-present Figma-style comment composer: a mention box over a round
// send button that's disabled until there's text, so it's never a dead
// click (no silent native-validation block on an invisible field).
export function NoteComposer({ contactId, onSaved }) {
  const { action, error } = useFormAction(addNoteAction, onSaved)
  const options = useMentionOptions()
  const [empty, setEmpty] = useState(true)

  return (
    <BareForm action={action}>
      <input type="hidden" name="contact_id" value={contactId} />
      <Stack gap="xs">
        <MentionField name="body" idsName="mention_user_ids" rows={2}
          options={options} aria-label="Add a note"
          onValue={(v) => setEmpty(!v.trim())}
          placeholder="Add a note — type @ to tag a teammate" />
        <NoteSendButton disabled={empty} />
      </Stack>
      <FormError message={error} />
    </BareForm>
  )
}
