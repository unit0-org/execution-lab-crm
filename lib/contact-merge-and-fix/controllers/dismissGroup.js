import { ContactMergeDismissal } from '../models'
import { canonicalPairs } from './canonicalPairs'

// Mark every pair in a reviewed group as "not duplicates", so the group is
// never suggested again. Idempotent (unique per canonical pair).
export async function dismissGroup(contactIds) {
  const rows = canonicalPairs(contactIds)

  await ContactMergeDismissal.bulkCreate(rows, { ignoreDuplicates: true })
}
