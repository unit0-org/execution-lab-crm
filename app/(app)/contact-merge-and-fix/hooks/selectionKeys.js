import { groupKey } from './groupKey'
import { fixKey } from './fixKey'

// One namespaced key space over both sections, so a single selection can
// hold duplicate groups and suggested fixes at the same time.
export const groupSelectionKey = (group) => `group:${groupKey(group)}`

export const fixSelectionKey = (fix) => `fix:${fixKey(fix)}`
