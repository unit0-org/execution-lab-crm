import { ContactPhone } from '@/lib/contact/models'

export async function addPhoneIfMissing(organizationId, contactId, phone) {
  if (!phone) return

  await ContactPhone.findOrCreate({
    where: { contact_id: contactId, phone }
  })
}
