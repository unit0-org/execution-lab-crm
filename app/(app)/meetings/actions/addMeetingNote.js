'use server'

import { addMeetingNote } from '@/lib/meeting/controllers/addMeetingNote'
import { withMember } from '@/lib/auth/withMember'

export const addMeetingNoteAction = withMember(
  (formData) => {
    const meetingId = formData.get('meeting_id')

    return addMeetingNote(meetingId, formData.get('body'))
  }
)
