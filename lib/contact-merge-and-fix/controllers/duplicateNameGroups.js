import { Contact } from '@/lib/contact/models'
import { nameKey } from '../nameKey'
import { groupIds } from './groupIds'

// Contact-id groups that share a normalized full name (more than one
// contact). Namesakes are surfaced, never auto-merged.
export async function duplicateNameGroups() {
  const rows = await Contact.findAll({
    attributes: ['id', 'first_name', 'last_name']
  })
  const keyed = rows.map((row) => ({ id: row.id, key: nameKey(row) }))

  return groupIds(keyed)
}
