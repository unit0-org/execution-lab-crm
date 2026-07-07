import { ContactNote, ContactFact, ContactTask } from '@/lib/contact/models'
import { Purchase } from '@/lib/purchase/models'
import { Invoice } from '@/lib/invoice/models'
import { Registration, WaitlistEntry } from '@/lib/registration/models'
import { Notification, NoteMention } from '@/lib/notification/models'
import { Offer } from '@/lib/offerGenerator/models'
import { claimRows } from './claimRows'

const OWNED = [
  ContactNote, ContactFact, ContactTask, Purchase, Invoice, Registration,
  WaitlistEntry, NoteMention, Notification, Offer
]

// Reassign the loser's owned records to the winner: notes, facts, tasks,
// purchases, invoices, registrations, waitlist entries, note mentions,
// notifications and offers (their configurator inputs ride along via
// offer_id). None are unique per contact, so a straight move is safe
// (a task's google_task_id is unique but the reassign leaves it untouched).
export async function claimContactRecords(winnerId, loserIds, t) {
  for (const Model of OWNED)
    await claimRows(Model, winnerId, loserIds, t)
}
