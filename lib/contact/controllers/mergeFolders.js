import { mergeParticipations } from './mergeParticipations'
import { mergeMeetingParticipations } from './mergeMeetingParticipations'
import { mergeEmails } from './mergeEmails'
import { mergePhones } from './mergePhones'
import { mergeCategoryLinks } from './mergeCategoryLinks'
import { mergeCompanyLinks } from './mergeCompanyLinks'
import { mergeRelationships } from './mergeRelationships'
import { mergePortalMembers } from './mergePortalMembers'
import { mergeToolAccess } from './mergeToolAccess'
import { mergeEmailMessages } from './mergeEmailMessages'
import { mergeContactFiles } from './mergeContactFiles'
import { claimContactRecords } from './claimContactRecords'
import { foldOfferCollab } from './foldOfferCollab'
import { fillMissingProfileFields } from './fillMissingProfileFields'

// Each folds one contact-owned table into the winner — plus the contact's
// own columns, which no FK carries over. ARCHITECTURE.md ("contact merge"
// invariant): add a table that references contact_id → add its folder here;
// add a column to contact → fold it in fillMissingProfileFields.
export const FOLDERS = [
  fillMissingProfileFields, mergeParticipations, mergeMeetingParticipations,
  mergeEmails, mergePhones, mergeCategoryLinks, mergeCompanyLinks,
  mergeRelationships, mergePortalMembers, mergeToolAccess, mergeEmailMessages,
  mergeContactFiles, claimContactRecords, foldOfferCollab
]
