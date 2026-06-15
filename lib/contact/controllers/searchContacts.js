import { contactIdsByName } from './contactIdsByName'
import { contactIdsByEmail } from './contactIdsByEmail'
import { listContactsByIds } from './listByIds'

// Contacts whose name or any email matches the query (case-insensitive,
// substring), shaped like listContacts. A blank query yields no results.
export async function searchContacts(query) {
  const trimmed = (query || '').trim()

  if (!trimmed) return []

  const groups = await Promise.all([
    contactIdsByName(trimmed),
    contactIdsByEmail(trimmed)
  ])
  const ids = [...new Set(groups.flat())]

  return listContactsByIds(ids)
}
