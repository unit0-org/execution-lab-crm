import { cohortStateKey } from './cohortStateKey'
import { STATE_META } from './cohortStateMeta'

const href = (kind, slug) =>
  kind === 'register' ? `/register/${slug}` : `/waitlist?cohort=${slug}`

// Resolve a cohort card to its design state + tag/CTA/destination.
export function cohortState(card) {
  const state = cohortStateKey(card)
  const meta = STATE_META[state]

  return { state, ...meta, href: href(meta.kind, card.slug) }
}
