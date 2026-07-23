import { duplicateNameGroups } from './duplicateNameGroups'
import { duplicatePhoneGroups } from './duplicatePhoneGroups'
import { dismissedPairKeys } from './dismissedPairKeys'
import { withoutDismissed } from './withoutDismissed'
import { listContactsByIds } from '@/lib/contact/controllers/listByIds'

// Suggested duplicate groups for the Merge & Fix surface: contacts that
// share a name or a phone, tagged with the reason, shaped like the contacts
// list, minus pairs already dismissed. Derived at read time — nothing but
// the dismissals is stored.
export async function findDuplicateGroups() {
  const [names, phones, dismissed] = await Promise.all([
    duplicateNameGroups(), duplicatePhoneGroups(), dismissedPairKeys()
  ])
  const tagged = [
    ...names.map((ids) => ({ reason: 'name', ids })),
    ...phones.map((ids) => ({ reason: 'phone', ids }))
  ]
  const shaped = await Promise.all(tagged.map(shapeGroup))

  return withoutDismissed(shaped, dismissed)
}

async function shapeGroup({ reason, ids }) {
  const contacts = await listContactsByIds(ids)

  return { reason, contacts }
}
