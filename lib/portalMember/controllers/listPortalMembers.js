import { PortalMember } from '../models'
import { Contact, ContactEmail } from '@/lib/contact/models'

const shape = (row) => {
  const r = row.toJSON()
  const contact = r.contact || {}

  return {
    id: r.id, contactId: r.contact_id, status: r.status,
    name: contact.full_name || null,
    email: contact.contact_email?.[0]?.email || null
  }
}

// All portal members with their contact's name + primary email (from the
// join — never stored here), for the admin "Portal members" settings tab.
export async function listPortalMembers() {
  const rows = await PortalMember.findAll({
    include: [{
      model: Contact,
      include: [{ model: ContactEmail, as: 'contact_email' }]
    }],
    order: [['created_at', 'ASC']]
  })

  return rows.map(shape)
}
