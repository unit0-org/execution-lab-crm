import { OrganizationUser } from '../models'

const nameOf = (row) => row.display_name || row.email || 'Member'

// Display names for a set of user ids, to attribute what each of them wrote.
// Ids with no member row are simply absent — the caller shows them as
// unattributed rather than guessing.
export async function memberNamesByUserId(userIds) {
  const ids = [...new Set((userIds || []).filter(Boolean))]

  if (!ids.length) return new Map()

  const rows = await OrganizationUser.findAll({ where: { user_id: ids } })

  return new Map(rows.map((row) => [row.user_id, nameOf(row)]))
}
