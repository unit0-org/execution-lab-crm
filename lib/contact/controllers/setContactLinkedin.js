import { Contact } from '@/lib/contact/models'

// Fill the contact's LinkedIn from a registration, without clobbering one
// already on file (only updates when the column is still empty).
export async function setContactLinkedin(orgId, contactId, linkedin) {
  if (!linkedin) return

  await Contact.update(
    { linkedin_url: linkedin },
    { where: { id: contactId, organization_id: orgId, linkedin_url: null } }
  )
}
