'use server'

import { addMeetingNote } from '@/lib/meeting/controllers/addMeetingNote'
import { currentMembership } from '@/lib/org/controllers/currentMembership'

export async function addMeetingNoteAction(formData) {
  const m = await currentMembership()

  if (!m) return { error: 'Not allowed' }

  const meetingId = formData.get('meeting_id')

  return addMeetingNote(meetingId, formData.get('body'))
}
