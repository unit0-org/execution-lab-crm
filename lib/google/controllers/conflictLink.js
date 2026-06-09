import { ContactGoogleLink } from '../models/ContactGoogleLink'
import { GoogleAccount } from '../models/GoogleAccount'

// The contact_google_link + google_account for a conflict's account,
// used to push the CRM value back to Google.
export async function conflictLink(organizationId, conflict) {
  const where = { organization_id: organizationId }
  const link = await ContactGoogleLink.findOne({
    where: {
      ...where,
      contact_id: conflict.contact_id,
      google_account_id: conflict.google_account_id
    }
  })
  const account = await GoogleAccount.findOne({
    where: { ...where, id: conflict.google_account_id }
  })

  return { link, account }
}
