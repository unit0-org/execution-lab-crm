import { Contact } from '@/lib/contact/models'
import { mergeParticipations } from './mergeParticipations'
import { mergeMeetingParticipations } from './mergeMeetingParticipations'
import { mergeEmails } from './mergeEmails'
import { mergePhones } from './mergePhones'
import { mergeCategoryLinks } from './mergeCategoryLinks'
import { mergeRelationships } from './mergeRelationships'
import { mergePortalMembers } from './mergePortalMembers'
import { mergeToolAccess } from './mergeToolAccess'
import { mergeEmailMessages } from './mergeEmailMessages'
import { mergeContactFiles } from './mergeContactFiles'
import { claimContactRecords } from './claimContactRecords'

// Each folds one contact-owned table into the winner. ARCHITECTURE.md
// ("contact merge" invariant): add a contact_id table → add its folder here.
const FOLDERS = [
  mergeParticipations, mergeMeetingParticipations, mergeEmails, mergePhones,
  mergeCategoryLinks, mergeRelationships, mergePortalMembers, mergeToolAccess,
  mergeEmailMessages, mergeContactFiles, claimContactRecords
]

// Fold every loser's data into the winner in the open transaction, then
// destroy the losers with `force` (real delete) so FK cascades fire.
export async function applyMerge(winnerId, loserIds, t) {
  for (const fold of FOLDERS) await fold(winnerId, loserIds, t)

  await Contact.destroy({
    where: { id: loserIds }, transaction: t, force: true
  })
}
