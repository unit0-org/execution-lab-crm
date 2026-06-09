'use server'

import { addParticipant } from '@/lib/meeting/controllers/addParticipant'
import { withOrg } from '@/lib/auth/withOrg'

export const addParticipantAction = withOrg((organizationId, formData) => {
  const meetingId = formData.get('meeting_id')

  return addParticipant(organizationId, meetingId, formData.get('email'))
})
