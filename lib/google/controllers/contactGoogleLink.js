import { ContactGoogleLink } from '../models/ContactGoogleLink'
import { GoogleAccount } from '../models/GoogleAccount'
import { pickPrimaryLink } from './pickPrimaryLink'

// The contact's Google link as { resourceName }, preferring the link on
// the org's primary account; null when the contact isn't linked at all.
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

  return { resourceName: link.resource_name }
}
