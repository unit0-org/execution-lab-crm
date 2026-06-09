'use server'

import { createMeeting } from '@/lib/meeting/controllers/createMeeting'
import { withOrg } from '@/lib/auth/withOrg'

export const createMeetingAction = withOrg(
  async (organizationId, formData) => {
    const result = await createMeeting(organizationId, {
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
