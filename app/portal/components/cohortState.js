import { cohortStateKey } from './cohortStateKey'
import { STATE_META } from './cohortStateMeta'

const registerHref = (slug, code) =>
  code
    ? `/register/${slug}?code=${encodeURIComponent(code)}`
    : `/register/${slug}`
const waitlistHref = (slug) => `/waitlist?cohort=${slug}`

const primaryHref = (kind, card) =>
  kind === 'register'
    ? registerHref(card.slug, card.couponCode)
    : waitlistHref(card.slug)

// Resolve a cohort card to its design state + tag/CTA/destinations. Register
// states also carry the waitlist as a secondary path.
export function cohortState(card) {
  const state = cohortStateKey(card)
  const meta = STATE_META[state]
  const secondary = meta.kind === 'register' ? waitlistHref(card.slug) : null

  return {
    state, ...meta,
    href: primaryHref(meta.kind, card),
    waitlist: secondary
  }
}
