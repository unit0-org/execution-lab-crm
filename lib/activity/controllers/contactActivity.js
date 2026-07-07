import { contactTimeline } from '@/lib/event/controllers/contactTimeline'
import { meetingEntries } from '@/lib/meeting/controllers/meetingEntries'
import { purchaseEntries } from '@/lib/purchase/controllers/purchaseEntries'
import { registrationEntries } from '@/lib/registration/controllers'
import { taskEntries } from '@/lib/contact/controllers/taskEntries'

const time = (entry) => (entry.date ? new Date(entry.date).getTime() : 0)

const byDateDesc = (a, b) => time(b) - time(a)

// A contact's events, meetings, purchases, cohort registrations and
// follow-up tasks merged into one timeline.
export async function contactActivity(contactId) {
  const [events, meetings, purchases, registrations, tasks] =
    await Promise.all([
      contactTimeline(contactId),
      meetingEntries(contactId),
      purchaseEntries(contactId),
      registrationEntries(contactId),
      taskEntries(contactId)
    ])

  return [...events, ...meetings, ...purchases, ...registrations, ...tasks]
    .sort(byDateDesc)
}
