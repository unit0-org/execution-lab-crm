import { isInviteOnly } from '@/lib/event/controllers/isInviteOnly'
import { isUnidentifiable } from '@/lib/contact/controllers/isUnidentifiable'

// The gate every intake path shares (API sync, live webhook, CSV import).
// Two kinds of guest never enter the CRM: one who was only ever invited
// (an invite says what we did, not what they did), and one carrying no
// email and no phone (nothing would match them next run, so each sync
// would add another copy of the same person).
export function isImportableGuest(g) {
  return !isInviteOnly(g?.participant) && !isUnidentifiable(g)
}
