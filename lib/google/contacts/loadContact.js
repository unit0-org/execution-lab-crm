import { Contact, ContactEmail, ContactPhone } from '@/lib/db/models'

const include = [
  { model: ContactEmail, as: 'contact_email' },
  { model: ContactPhone, as: 'contact_phone' }
]

// The CRM contact plus its emails/phones as plain string arrays.
export async function loadContact(contactId) {
  const row = await Contact.findByPk(contactId, { include })
  const c = row.toJSON()
  const emails = c.contact_email.map((e) => e.email)
  const phones = c.contact_phone.map((p) => p.phone)

  return { contact: c, emails, phones }
}
