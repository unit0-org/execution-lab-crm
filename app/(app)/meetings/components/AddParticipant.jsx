'use client'

import { Form } from '@/ui/molecules/Form'
import { TextField } from '@/ui/atoms/TextField'
import { GrowRow } from '@/ui/layout/GrowRow'
import { IconButton } from '@/ui/atoms/IconButton'
import { Icon } from '@/ui/atoms/Icon'
import { useFormAction } from '../hooks/useFormAction'
import { addParticipantAction } from '../actions/addParticipant'

export function AddParticipant({ meetingId, onChanged }) {
  const { action } = useFormAction(addParticipantAction, onChanged)

  return (
    <Form action={action}>
      <input type="hidden" name="meeting_id" value={meetingId} />
      <GrowRow>
        <TextField name="email" type="email" placeholder="Add by email" />
        <IconButton type="submit" tone="primary" label="Add participant">
          <Icon name="plus" size={16} />
        </IconButton>
      </GrowRow>
    </Form>
  )
}
