import { Contact } from '@/lib/db/models'
import { mergeParticipations } from './mergeParticipations'
import { mergeMeetingParticipations } from './mergeMeetingParticipations'
import { mergeEmails } from './mergeEmails'
import { mergePhones } from './mergePhones'
import { mergeCategoryLinks } from './mergeCategoryLinks'
import { mergeRelationships } from './mergeRelationships'
import { claimContactRecords } from './claimContactRecords'

// Fold every loser's data into the winner inside the open transaction,
// then delete the losers. Each await below folds one contact-owned table;
// per-table handling + FK on-delete live in ARCHITECTURE.md ("contact
// merge" invariant). Add a contact_id table → add a step here.
export async function applyMerge(winnerId, loserIds, t) {
  await mergeParticipations(winnerId, loserIds, t)
  await mergeMeetingParticipations(winnerId, loserIds, t)
  await mergeEmails(winnerId, loserIds, t)
  await mergePhones(winnerId, loserIds, t)
  await mergeCategoryLinks(winnerId, loserIds, t)
  await mergeRelationships(winnerId, loserIds, t)
  await claimContactRecords(winnerId, loserIds, t)
  await Contact.destroy({ where: { id: loserIds }, transaction: t })
}
