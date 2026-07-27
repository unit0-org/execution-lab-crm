import { duplicateNameGroups } from './duplicateNameGroups'
import { duplicatePhoneGroups } from './duplicatePhoneGroups'
import { dismissedPairKeys } from './dismissedPairKeys'
import { withoutDismissed } from './withoutDismissed'

// The suggested duplicate groups as bare id lists, tagged with the match
// reason and minus pairs already dismissed. The cheap half of the surface:
// the page then loads each group's contacts, the sidebar badge only counts.
export async function duplicateGroupIds() {
  const [names, phones, dismissed] = await Promise.all([
    duplicateNameGroups(), duplicatePhoneGroups(), dismissedPairKeys()
  ])
  const groups = [
    ...names.map((ids) => toGroup('name', ids)),
    ...phones.map((ids) => toGroup('phone', ids))
  ]

  return withoutDismissed(groups, dismissed)
}

const toGroup = (reason, ids) => ({
  reason, contacts: ids.map((id) => ({ id }))
})
