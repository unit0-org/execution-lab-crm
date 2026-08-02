import { duplicateGroupIds } from './duplicateGroupIds'
import { listContactsByIds } from '@/lib/contact/controllers/listByIds'

// Suggested duplicate groups for the Merge & Fix surface: contacts that
// share a name or a phone, listed once per set of contacts and tagged with
// every reason that matched, shaped like the contacts list, minus pairs
// already dismissed. Derived at read time — nothing but the dismissals is
// stored.
export function findDuplicateGroups() {
  return duplicateGroupIds().then(shapeGroups)
}

const shapeGroups = (groups) => Promise.all(groups.map(shapeGroup))

async function shapeGroup({ reasons, contacts }) {
  const ids = contacts.map((contact) => contact.id)

  return { reasons, contacts: await listContactsByIds(ids) }
}
