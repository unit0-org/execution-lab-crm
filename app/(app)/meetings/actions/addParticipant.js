'use server'

import { addParticipant } from '@/lib/meeting/controllers/addParticipant'
import { currentMembership } from '@/lib/org/controllers/currentMembership'

export async function addParticipantAction(formData) {
  const m = await currentMembership()

  if (!m) return { error: 'Not allowed' }

  const meetingId = formData.get('meeting_id')

  return addParticipant(m.organizationId, meetingId, formData.get('email'))
}
