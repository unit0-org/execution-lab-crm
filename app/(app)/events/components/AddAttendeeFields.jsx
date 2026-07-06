'use client'

import { Stack } from '@/ui/layout/Stack'
import { Select } from '@/ui/atoms/Select'
import { SubmitButton } from '@/ui/atoms/SubmitButton'
import { ContactAutocomplete } from
  '@/app/(app)/contacts/components/ContactAutocomplete'
import { STATUS_LABELS } from '@/lib/event/controllers/statusStates'

export function AddAttendeeFields({ eventId, contact, onChange }) {
  const contactId = contact.contactId || ''

  return (
    <Stack gap="md">
      <ContactAutocomplete label="Contact" value={contact}
        onChange={onChange} allowCreate={false} />
      <Select label="Status" name="status" options={STATUS_LABELS}
        defaultValue="Invited" />
      <input type="hidden" name="own_event_id" value={eventId} />
      <input type="hidden" name="contact_id" value={contactId} />
      <SubmitButton disabled={!contactId}>Add</SubmitButton>
    </Stack>
  )
}
