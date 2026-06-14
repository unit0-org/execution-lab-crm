import { Op } from 'sequelize'
import { ContactRelationship } from '@/lib/contact/models'
import { toRelationshipRow } from './toRelationshipRow'
import { contactInOrg } from './contactInOrg'

const include = [
  { association: 'from_contact' },
  { association: 'to_contact' },
  { association: 'type' }
]

// A contact's relationships (either direction), shaped for display.
export async function listRelationships(organizationId, contactId) {
  if (!await contactInOrg(organizationId, contactId)) return []

  const rows = await ContactRelationship.findAll({
    where: {
      [Op.or]: [
        { from_contact_id: contactId },
        { to_contact_id: contactId }
      ]
    },
    include,
    order: [['created_at', 'DESC']]
  })

  return rows.map((r) => toRelationshipRow(r.toJSON(), contactId))
}
