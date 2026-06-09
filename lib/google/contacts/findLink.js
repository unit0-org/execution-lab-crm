import { ContactGoogleLink } from '../models/ContactGoogleLink'

// The link row joining a Google person (per account) to a CRM contact.
export function findLink(googleAccountId, resourceName) {
  return ContactGoogleLink.findOne({
    where: { google_account_id: googleAccountId, resource_name: resourceName }
  })
}
