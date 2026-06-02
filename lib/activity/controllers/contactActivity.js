import { contactTimeline } from '@/lib/event/controllers/contactTimeline'
import { meetingEntries } from '@/lib/meeting/controllers/meetingEntries'

const time = (entry) => (entry.date ? new Date(entry.date).getTime() : 0)

const byDateDesc = (a, b) => time(b) - time(a)

// A contact's events and meetings merged into one timeline, newest first.
export async function contactActivity(contactId) {
  const [events, meetings] = await Promise.all([
    contactTimeline(contactId),
    meetingEntries(contactId)
  ])

  return [...events, ...meetings].sort(byDateDesc)
}
