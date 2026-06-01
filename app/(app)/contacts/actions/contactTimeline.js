'use server'

import { contactTimeline } from '@/lib/event/controllers/contactTimeline'

export async function contactTimelineAction(contactId) {
  return contactTimeline(contactId)
}
