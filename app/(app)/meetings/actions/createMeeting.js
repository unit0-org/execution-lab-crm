'use server'

import { createMeeting } from '@/lib/meeting/controllers/createMeeting'
import { splitEmails } from '@/lib/meeting/controllers/splitEmails'

export async function createMeetingAction(formData) {
  const result = await createMeeting({
    title: formData.get('title'),
    starts_at: formData.get('starts_at') || null,
    ends_at: formData.get('ends_at') || null,
    online: formData.get('type') === 'online',
    emails: splitEmails(formData.get('emails'))
  })

  if (result.error) return result

  return { ok: true }
}
