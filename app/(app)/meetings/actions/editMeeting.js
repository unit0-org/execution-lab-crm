'use server'

import { updateMeeting } from '@/lib/meeting/controllers/updateMeeting'
import { currentMembership } from '@/lib/org/controllers/currentMembership'

export async function editMeetingAction(_prev, formData) {
  const m = await currentMembership()

  if (!m) return { error: 'Not allowed' }

  return updateMeeting(m.organizationId, formData.get('id'), {
    title: formData.get('title'),
    starts_at: formData.get('starts_at') || null,
    online: formData.get('type') === 'online'
  })
}
