import { addEmailIfMissing } from '@/lib/contact/controllers/addEmailIfMissing'
import { addPhoneIfMissing } from '@/lib/contact/controllers/addPhoneIfMissing'
import { setContactLinkedin }
  from '@/lib/contact/controllers/setContactLinkedin'

// Copy the registrant's structured fields onto the contact: email and
// phone become contact records; LinkedIn fills the contact's column.
export async function mapRegistrationToContact(orgId, contactId, reg) {
  await addEmailIfMissing(orgId, contactId, reg.email)
  await addPhoneIfMissing(orgId, contactId, reg.phone)
  await setContactLinkedin(orgId, contactId, reg.linkedin)
}
