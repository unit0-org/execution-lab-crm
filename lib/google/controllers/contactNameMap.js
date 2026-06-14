import { Op } from 'sequelize'
import { Contact } from '@/lib/contact/models'
import { contactName } from './contactName'

// Build an { [contactId]: displayName } map for the given contact ids.
export async function contactNameMap(organizationId, ids) {
  const rows = await Contact.findAll({
    where: { organization_id: organizationId, id: { [Op.in]: ids } },
    attributes: ['id', 'first_name', 'last_name']
  })

  return Object.fromEntries(rows.map((r) => [r.id, contactName(r)]))
}
