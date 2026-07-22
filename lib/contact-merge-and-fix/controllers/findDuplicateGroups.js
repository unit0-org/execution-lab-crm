import { duplicateNameGroups } from './duplicateNameGroups'
import { duplicatePhoneGroups } from './duplicatePhoneGroups'
import { listContactsByIds } from '@/lib/contact/controllers/listByIds'

// Suggested duplicate groups for the Merge & Fix surface: contacts that
// share a name or a phone, each tagged with the reason and shaped like the
// contacts list. Derived at read time — nothing is stored.
export async function findDuplicateGroups() {
  const [names, phones] = await Promise.all([
    duplicateNameGroups(), duplicatePhoneGroups()
  ])
  const tagged = [
    ...names.map((ids) => ({ reason: 'name', ids })),
    ...phones.map((ids) => ({ reason: 'phone', ids }))
  ]

  return Promise.all(tagged.map(shapeGroup))
}

async function shapeGroup({ reason, ids }) {
  const contacts = await listContactsByIds(ids)

  return { reason, contacts }
}
