'use server'

import { updateMeeting } from '@/lib/meeting/controllers/updateMeeting'

export async function editMeetingAction(_prev, formData) {
  return updateMeeting(formData.get('id'), {
    title: formData.get('title'),
    starts_at: formData.get('starts_at') || null,
    online: formData.get('type') === 'online'
  })
}
