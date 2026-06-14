import { ContactPhone } from '@/lib/contact/models'

// The id of the contact that owns a phone, or null.
export async function findContactIdByPhone(phone) {
  const row = await ContactPhone.findOne({
    where: { phone }
  })

  return row ? row.contact_id : null
}
