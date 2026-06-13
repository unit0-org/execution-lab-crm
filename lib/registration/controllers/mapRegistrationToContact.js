import { addEmailIfMissing } from '@/lib/contacts/addEmailIfMissing'
import { addPhoneIfMissing } from '@/lib/contacts/addPhoneIfMissing'
import { setContactLinkedin } from '@/lib/contacts/setContactLinkedin'

// Copy the registrant's structured fields onto the contact: email and
// phone become contact records; LinkedIn fills the contact's column.
export async function mapRegistrationToContact(orgId, contactId, reg) {
  await addEmailIfMissing(orgId, contactId, reg.email)
  await addPhoneIfMissing(orgId, contactId, reg.phone)
  await setContactLinkedin(orgId, contactId, reg.linkedin)
}
