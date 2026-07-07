import { contactTimeline } from '@/lib/event/controllers/contactTimeline'
import { meetingEntries } from '@/lib/meeting/controllers/meetingEntries'
import { purchaseEntries } from '@/lib/purchase/controllers/purchaseEntries'
import { registrationEntries } from '@/lib/registration/controllers'
import { emailEntries } from '@/lib/email/controllers/emailEntries'
import { taskEntries } from '@/lib/contact/controllers/taskEntries'

const time = (entry) => (entry.date ? new Date(entry.date).getTime() : 0)

const byDateDesc = (a, b) => time(b) - time(a)

// A contact's events, meetings, purchases, cohort registrations, synced
// emails and follow-up tasks merged into one timeline.
export async function contactActivity(contactId) {
  const [events, meetings, purchases, registrations, emails, tasks] =
    await Promise.all([
      contactTimeline(contactId),
      meetingEntries(contactId),
      purchaseEntries(contactId),
      registrationEntries(contactId),
      emailEntries(contactId),
      taskEntries(contactId)
    ])

  return [
    ...events, ...meetings, ...purchases, ...registrations, ...emails,
    ...tasks
  ].sort(byDateDesc)
}
