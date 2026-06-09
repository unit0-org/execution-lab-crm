import { ContactGoogleLink } from '../models/ContactGoogleLink'

// Drop the link for a deleted Google person, keeping the CRM contact
// and all of its data intact.
export function unlinkPerson(account, resourceName) {
  return ContactGoogleLink.destroy({
    where: { google_account_id: account.id, resource_name: resourceName }
  })
}
