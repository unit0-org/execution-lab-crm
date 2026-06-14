'use server'

import { joinWaitlist } from '@/lib/waitlist/controllers'
import { formToWaitlist } from './formToWaitlist'

// Public: add the visitor to the waitlist (Story 3.1).
export async function joinWaitlistAction(prev, formData) {
  try {
    return await joinWaitlist(formToWaitlist(formData))
  } catch (e) {
    return { error: e.message }
  }
}
