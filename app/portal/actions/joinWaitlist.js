'use server'

import { portalOrganizationId } from '@/lib/portal/portalOrganizationId'
import { joinWaitlist } from '@/lib/waitlist/controllers'
import { formToWaitlist } from './formToWaitlist'

// Public, org-from-env: add the visitor to the waitlist (Story 3.1).
export async function joinWaitlistAction(prev, formData) {
  const org = portalOrganizationId()

  if (!org) return { error: 'Waitlist unavailable.' }

  try {
    return await joinWaitlist(org, formToWaitlist(formData))
  } catch (e) {
    return { error: e.message }
  }
}
