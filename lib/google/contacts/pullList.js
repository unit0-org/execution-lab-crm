import { addEmailIfMissing } from '@/lib/contact/controllers/addEmailIfMissing'
import { addPhoneIfMissing } from '@/lib/contact/controllers/addPhoneIfMissing'

// Add every Google email/phone not already on the CRM contact.
export async function pullList(contactId, person) {
  for (const email of person.emails)
    await addEmailIfMissing(contactId, email)

  for (const phone of person.phones)
    await addPhoneIfMissing(contactId, phone)
}
