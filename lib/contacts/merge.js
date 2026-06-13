import { sequelize } from '@/lib/db/sequelize'
import { applyMerge } from './applyMerge'
import { allContactsInOrg } from './allContactsInOrg'

// Fold every loser contact into the winner, preserving all activity —
// event/meeting participations, emails, phones, categories, relationships,
// notes, facts, registrations, purchases, invoices and waitlist entries —
// and dropping only true duplicates. Permanent; cannot be undone.
export async function mergeContacts(organizationId, winnerId, loserIds) {
  const ids = [winnerId, ...loserIds]

  if (!await allContactsInOrg(organizationId, ids)) {
    return { error: 'Not allowed' }
  }

  return sequelize.transaction((t) => applyMerge(winnerId, loserIds, t))
}
