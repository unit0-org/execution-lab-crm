'use client'

import { Form } from '@/ui/molecules/Form'
import { TextField } from '@/ui/atoms/TextField'
import { GrowRow } from '@/ui/layout/GrowRow'
import { IconButton } from '@/ui/atoms/IconButton'
import { Icon } from '@/ui/atoms/Icon'
import { useFormAction } from '../hooks/useFormAction'
import { addMeetingNoteAction } from '../actions/addMeetingNote'

export function AddNoteForm({ meetingId, onChanged }) {
  const { action } = useFormAction(addMeetingNoteAction, onChanged)

  return (
    <Form action={action}>
      <input type="hidden" name="meeting_id" value={meetingId} />
      <GrowRow>
        <TextField name="body" placeholder="Add a note" />
        <IconButton type="submit" tone="primary" label="Add note">
          <Icon name="plus" size={16} />
        </IconButton>
      </GrowRow>
    </Form>
  )
}
