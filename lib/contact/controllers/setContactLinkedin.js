import { Contact } from '@/lib/contact/models'

// Fill the contact's LinkedIn from a registration; skips when empty. The
// model guards against clobbering a value already on file.
export function setContactLinkedin(orgId, contactId, linkedin) {
  if (!linkedin) return

  return Contact.fillLinkedinIfEmpty(orgId, contactId, linkedin)
}
