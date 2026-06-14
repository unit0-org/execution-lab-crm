'use server'

import { addParticipant } from '@/lib/meeting/controllers/addParticipant'
import { withMember } from '@/lib/auth/withMember'

export const addParticipantAction = withMember((formData) => {
  const meetingId = formData.get('meeting_id')

  return addParticipant(meetingId, formData.get('email'))
})
