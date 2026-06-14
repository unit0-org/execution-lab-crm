import { Contact, ContactPhone } from '@/lib/contact/models'

// The id of the org's contact that owns a phone, or null. Phone rows
// have no organization_id, so we scope via the owning contact.
export async function findContactIdByPhone(organizationId, phone) {
  const row = await ContactPhone.findOne({
    where: { phone },
    include: [{
      model: Contact,
      required: true,
      where: { organization_id: organizationId }
    }]
  })

  return row ? row.contact_id : null
}
