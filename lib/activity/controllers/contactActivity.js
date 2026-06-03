import { contactTimeline } from '@/lib/event/controllers/contactTimeline'
import { meetingEntries } from '@/lib/meeting/controllers/meetingEntries'
import { purchaseEntries } from '@/lib/purchase/controllers/purchaseEntries'

const time = (entry) => (entry.date ? new Date(entry.date).getTime() : 0)

const byDateDesc = (a, b) => time(b) - time(a)

// A contact's events, meetings and purchases merged into one timeline.
export async function contactActivity(contactId) {
  const [events, meetings, purchases] = await Promise.all([
    contactTimeline(contactId),
    meetingEntries(contactId),
    purchaseEntries(contactId)
  ])

  return [...events, ...meetings, ...purchases].sort(byDateDesc)
}
