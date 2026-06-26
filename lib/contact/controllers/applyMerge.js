import { Contact } from '@/lib/contact/models'
import { mergeParticipations } from './mergeParticipations'
import { mergeMeetingParticipations } from './mergeMeetingParticipations'
import { mergeEmails } from './mergeEmails'
import { mergePhones } from './mergePhones'
import { mergeCategoryLinks } from './mergeCategoryLinks'
import { mergeRelationships } from './mergeRelationships'
import { mergePortalMembers } from './mergePortalMembers'
import { mergeToolAccess } from './mergeToolAccess'
import { claimContactRecords } from './claimContactRecords'

// Fold every loser's data into the winner inside the open transaction,
// then delete the losers. Each await below folds one contact-owned table;
// per-table handling + FK on-delete live in ARCHITECTURE.md ("contact
// merge" invariant). Add a contact_id table → add a step here. The loser
// destroy is `force` (real delete) so FK cascades still fire — merge is
// not undoable, unlike a direct soft-delete.
export async function applyMerge(winnerId, loserIds, t) {
  await mergeParticipations(winnerId, loserIds, t)
  await mergeMeetingParticipations(winnerId, loserIds, t)
  await mergeEmails(winnerId, loserIds, t)
  await mergePhones(winnerId, loserIds, t)
  await mergeCategoryLinks(winnerId, loserIds, t)
  await mergeRelationships(winnerId, loserIds, t)
  await mergePortalMembers(winnerId, loserIds, t)
  await mergeToolAccess(winnerId, loserIds, t)
  await claimContactRecords(winnerId, loserIds, t)
  await Contact.destroy({
    where: { id: loserIds }, transaction: t, force: true
  })
}
