import { ContactPhone } from '@/lib/contact/models'

// The id of the contact that owns a phone, or null. Takes the caller's
// transaction so the lookup runs inside their identity lock.
export async function findContactIdByPhone(phone, transaction) {
  const row = await ContactPhone.findOne({
    where: { phone },
    transaction
  })

  return row ? row.contact_id : null
}
