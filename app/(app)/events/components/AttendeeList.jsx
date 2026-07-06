'use client'

import { Stack } from '@/ui/layout/Stack'
import { SectionHeader } from '@/ui/molecules/SectionHeader'
import { AttendeeBulkBar } from './AttendeeBulkBar'
import { AttendeeFilter } from './AttendeeFilter'
import { AttendeeBody } from './AttendeeBody'
import { AddAttendeeModal } from './AddAttendeeModal'
import { useAttendeeList } from '../hooks/useAttendeeList'

export function AttendeeList({ eventId, attendees, onChanged }) {
  const list = useAttendeeList(attendees)

  return (
    <Stack gap="sm">
      <SectionHeader title="Attendees" addLabel="Add attendee"
        onAdd={list.modal.show} />
      <AttendeeBulkBar selection={list.selection} onChanged={onChanged} />
      <AttendeeFilter active={list.activeStatus} onPick={list.setStatus}
        count={list.count} />
      <AttendeeBody attendees={list.filtered} selection={list.selection}
        onChanged={onChanged} />
      <AddAttendeeModal eventId={eventId} open={list.modal.open}
        onClose={list.modal.hide} onChanged={onChanged} />
    </Stack>
  )
}
