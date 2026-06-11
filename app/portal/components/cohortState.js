import { cohortStateKey } from './cohortStateKey'
import { STATE_META } from './cohortStateMeta'

const href = (kind, id) =>
  kind === 'register' ? `/register/${id}` : '/waitlist'

// Resolve a cohort card to its design state + tag/CTA/destination.
export function cohortState(card) {
  const state = cohortStateKey(card)
  const meta = STATE_META[state]

  return { state, ...meta, href: href(meta.kind, card.id) }
}
