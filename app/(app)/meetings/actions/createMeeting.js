'use server'

import { createMeeting } from '@/lib/meeting/controllers/createMeeting'
import { withMember } from '@/lib/auth/withMember'

export const createMeetingAction = withMember(
  async (formData) => {
    const result = await createMeeting({
      title: formData.get('title'),
      starts_at: formData.get('starts_at') || null,
      ends_at: formData.get('ends_at') || null,
      online: formData.get('type') === 'online',
      emails: formData.getAll('emails').filter(Boolean)
    })

    if (result.error) return result

    return { ok: true }
  }
)
