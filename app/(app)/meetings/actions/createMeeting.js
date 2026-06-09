'use server'

import { createMeeting } from '@/lib/meeting/controllers/createMeeting'
import { currentMembership } from '@/lib/org/controllers/currentMembership'

export async function createMeetingAction(formData) {
  const m = await currentMembership()

  if (!m) return { error: 'Not allowed' }

  const result = await createMeeting(m.organizationId, {
    title: formData.get('title'),
    starts_at: formData.get('starts_at') || null,
    ends_at: formData.get('ends_at') || null,
    online: formData.get('type') === 'online',
    emails: formData.getAll('emails').filter(Boolean)
  })

  if (result.error) return result

  return { ok: true }
}
