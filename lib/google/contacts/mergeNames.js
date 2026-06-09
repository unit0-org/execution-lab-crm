import { mergeScalar } from './mergeScalar'
import { pushName } from './pushName'

// Reconcile first/last name. Both push the whole `names` section, so a
// single push covers either empty side.
export async function mergeNames(account, token, contact, person) {
  const push = () => pushName(account, token, contact, person)

  await mergeScalar(account, person, contact, {
    field: 'firstName',
    column: 'first_name',
    push
  })
  await mergeScalar(account, person, contact, {
    field: 'lastName',
    column: 'last_name',
    push
  })
}
