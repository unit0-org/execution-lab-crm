import { currentMembership } from '@/lib/org/controllers/currentMembership'
import { denied } from './denied'

// Wrap a server action so it runs with the caller's organizationId as its
// first argument, refusing callers without a membership (403). Pass a
// `fallback` (e.g. [] or null) to shape that refusal for read actions.
export function withOrg(handler, fallback = denied()) {
  return async (...args) => {
    const m = await currentMembership()

    if (!m) return fallback

    return handler(m.organizationId, ...args)
  }
}
