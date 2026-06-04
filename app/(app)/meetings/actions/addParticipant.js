'use server'

import { addParticipant } from '@/lib/meeting/controllers/addParticipant'

export async function addParticipantAction(formData) {
  const meetingId = formData.get('meeting_id')

  return addParticipant(meetingId, formData.get('email'))
}
