'use server'

import { removeParticipant } from '@/lib/meeting/controllers/removeParticipant'
import { withOrg } from '@/lib/auth/withOrg'

export const removeParticipantAction = withOrg(
  (_organizationId, formData) => removeParticipant(formData.get('id'))
)
