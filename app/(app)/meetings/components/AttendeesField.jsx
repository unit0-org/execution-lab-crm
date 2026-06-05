'use client'

import { Stack } from '@/ui/layout/Stack'
import { Combobox } from '@/ui/molecules/Combobox'
import { AttendeeChips } from './AttendeeChips'
import { AttendeeInputs } from './AttendeeInputs'
import { useAttendees } from '../hooks/useAttendees'

// Attendees picker: search contacts (or type an email) and add them.
export function AttendeesField() {
  const attendees = useAttendees()

  return (
    <Stack gap="sm">
      <Combobox label="Attendees" value={attendees.query}
        onChange={attendees.onChange} options={attendees.options}
        onPick={attendees.pick} hint="Search contacts or add email" />
      <AttendeeChips chosen={attendees.chosen} onRemove={attendees.remove} />
      <AttendeeInputs chosen={attendees.chosen} />
    </Stack>
  )
}
