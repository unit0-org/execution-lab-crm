'use server'

import { contactActivity } from '@/lib/activity/controllers/contactActivity'

export async function contactActivityAction(contactId) {
  return contactActivity(contactId)
}
