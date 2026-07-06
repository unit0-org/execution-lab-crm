'use client'

import { TitledModal } from '@/ui/organisms/TitledModal'
import { Form } from '@/ui/molecules/Form'
import { AddAttendeeFields } from './AddAttendeeFields'
import { useAddAttendee } from '../hooks/useAddAttendee'

export function AddAttendeeModal({ eventId, open, onClose, onChanged }) {
  const { contact, setContact, action } = useAddAttendee(onChanged, onClose)

  return (
    <TitledModal open={open} title="Add attendee" onClose={onClose}>
      <Form action={action}>
        <AddAttendeeFields eventId={eventId} contact={contact}
          onChange={setContact} />
      </Form>
    </TitledModal>
  )
}
