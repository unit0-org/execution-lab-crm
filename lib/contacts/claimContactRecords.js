import { ContactNote, ContactFact } from '@/lib/db/models'
import { Purchase } from '@/lib/purchase/models'
import { Invoice } from '@/lib/invoice/models'
import { Registration, WaitlistEntry } from '@/lib/registration/models'
import { claimRows } from './claimRows'

const OWNED = [
  ContactNote, ContactFact, Purchase, Invoice, Registration, WaitlistEntry
]

// Reassign the loser's owned records to the winner: notes, facts,
// purchases, invoices, registrations and waitlist entries. None are unique
// per contact, so a straight move is safe.
export async function claimContactRecords(winnerId, loserIds, t) {
  for (const Model of OWNED)
    await claimRows(Model, winnerId, loserIds, t)
}
