'use server'

import { updateMeeting } from '@/lib/meeting/controllers/updateMeeting'
import { withOrg } from '@/lib/auth/withOrg'

export const editMeetingAction = withOrg((organizationId, _prev, formData) =>
  updateMeeting(organizationId, formData.get('id'), {
    title: formData.get('title'),
    starts_at: formData.get('starts_at') || null,
    online: formData.get('type') === 'online'
  })
)
