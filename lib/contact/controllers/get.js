import { Contact, ContactEmail } from '@/lib/contact/models'

export async function getContact(organizationId, id) {
  const row = await Contact.findOne({
    where: { id, organization_id: organizationId },
    include: [
      { model: ContactEmail, as: 'contact_email' },
      { association: 'contact_phone' },
      { association: 'categories' }
    ]
  })

  if (!row) return null

  return row.toJSON()
}
