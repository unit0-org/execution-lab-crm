import { ContactFile } from '@/lib/contact/models'
import { claimRows } from './claimRows'

// Fold a loser's attachments into the winner. Files never dedupe — each
// object key is unique — so a straight reassign of contact_id is safe; the
// bytes stay untouched in the bucket.
export function mergeContactFiles(winnerId, loserIds, t) {
  return claimRows(ContactFile, winnerId, loserIds, t)
}
