'use server'

import { addMeetingNote } from '@/lib/meeting/controllers/addMeetingNote'

export async function addMeetingNoteAction(formData) {
  const meetingId = formData.get('meeting_id')

  return addMeetingNote(meetingId, formData.get('body'))
}
