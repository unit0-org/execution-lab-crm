'use server'

import { removeParticipant } from '@/lib/meeting/controllers/removeParticipant'
import { currentMembership } from '@/lib/org/controllers/currentMembership'

export async function removeParticipantAction(formData) {
  const m = await currentMembership()

  if (!m) return { error: 'Not allowed' }

  return removeParticipant(formData.get('id'))
}
