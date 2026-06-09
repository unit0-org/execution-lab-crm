import { Contact, ContactEmail } from '@/lib/db/models'

const toName = (c) => ({
  id: c.id,
  name: [c.first_name, c.last_name].filter(Boolean).join(' ') || 'Unknown',
  email: c.contact_email?.[0]?.email || null
})

// Map of contact id → { name, email } for the given contact ids,
// scoped to the organization (defense-in-depth).
export async function loadContactNames(organizationId, ids) {
  const rows = await Contact.findAll({
    where: { id: ids, organization_id: organizationId },
    include: { model: ContactEmail, as: 'contact_email' }
  })

  return new Map(rows.map((r) => [r.id, toName(r.toJSON())]))
}
