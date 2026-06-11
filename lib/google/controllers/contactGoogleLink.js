import { ContactGoogleLink } from '../models/ContactGoogleLink'
import { GoogleAccount } from '../models/GoogleAccount'
import { pickPrimaryLink } from './pickPrimaryLink'

// The contact's Google link as { resourceName, email }, preferring the
// link on the org's primary account; null when the contact isn't linked.
// The email is the owning account, so the web link opens under it.
export async function contactGoogleLink(organizationId, contactId) {
  const where = { organization_id: organizationId }
  const links = await ContactGoogleLink.findAll({
    where: { ...where, contact_id: contactId }
  })
  const primary = await GoogleAccount.findOne({
    where: { ...where, is_primary: true },
    attributes: ['id']
  })
  const link = pickPrimaryLink(links, primary?.id)

  if (!link) return null

  const owner = await GoogleAccount.findByPk(link.google_account_id, {
    attributes: ['email']
  })

  return { resourceName: link.resource_name, email: owner?.email }
}
