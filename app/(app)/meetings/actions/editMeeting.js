'use server'

import { updateMeeting } from '@/lib/meeting/controllers/updateMeeting'
import { withMember } from '@/lib/auth/withMember'

export const editMeetingAction = withMember((_prev, formData) =>
  updateMeeting(formData.get('id'), {
    title: formData.get('title'),
    starts_at: formData.get('starts_at') || null,
    online: formData.get('type') === 'online'
  })
)
