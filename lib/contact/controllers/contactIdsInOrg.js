import { Contact } from '@/lib/contact/models'

// The subset of the given contact ids that exist.
export async function contactIdsInOrg(contactIds) {
  const rows = await Contact.findAll({
    where: { id: contactIds },
    attributes: ['id']
  })

  return rows.map((row) => row.id)
}
