'use server'

import { addMeetingNote } from '@/lib/meeting/controllers/addMeetingNote'
import { withOrg } from '@/lib/auth/withOrg'

export const addMeetingNoteAction = withOrg(
  (_organizationId, formData) => {
    const meetingId = formData.get('meeting_id')

    return addMeetingNote(meetingId, formData.get('body'))
  }
)
