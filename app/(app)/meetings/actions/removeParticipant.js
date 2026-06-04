'use server'

import { removeParticipant } from '@/lib/meeting/controllers/removeParticipant'

export async function removeParticipantAction(formData) {
  return removeParticipant(formData.get('id'))
}
