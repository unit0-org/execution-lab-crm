import { ContactNote, ContactFact } from '@/lib/contact/models'
import { Purchase } from '@/lib/purchase/models'
import { Invoice } from '@/lib/invoice/models'
import { Registration, WaitlistEntry } from '@/lib/registration/models'
import { Notification, NoteMention } from '@/lib/notification/models'
import { claimRows } from './claimRows'

const OWNED = [
  ContactNote, ContactFact, Purchase, Invoice, Registration, WaitlistEntry,
  NoteMention, Notification
]

// Reassign the loser's owned records to the winner: notes, facts,
// purchases, invoices, registrations, waitlist entries, note mentions and
// notifications. None are unique per contact, so a straight move is safe.
export async function claimContactRecords(winnerId, loserIds, t) {
  for (const Model of OWNED)
    await claimRows(Model, winnerId, loserIds, t)
}
