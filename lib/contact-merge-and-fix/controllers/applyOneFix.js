import { tidyName } from './tidyName'
import { tidyPhone } from './tidyPhone'

// Apply one fix target by type, inside the caller's transaction.
export function applyOneFix(target, t) {
  if (target.type === 'phone') return tidyPhone(target.id, t)

  return tidyName(target.id, t)
}
