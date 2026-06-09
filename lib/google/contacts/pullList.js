import { addEmailIfMissing } from '@/lib/contacts/addEmailIfMissing'
import { addPhoneIfMissing } from '@/lib/contacts/addPhoneIfMissing'

const orgId = (account) => account.organization_id

// Add every Google email/phone not already on the CRM contact.
export async function pullList(account, contactId, person) {
  for (const email of person.emails)
    await addEmailIfMissing(orgId(account), contactId, email)

  for (const phone of person.phones)
    await addPhoneIfMissing(orgId(account), contactId, phone)
}
