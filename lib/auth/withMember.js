import { currentMembership } from '@/lib/org/controllers/currentMembership'
import { denied } from './denied'

// Wrap a server action so it only runs for an authenticated org member
// (403 otherwise). Unlike withOrg it injects no organizationId — for
// actions on entities that are no longer organization-scoped.
export function withMember(handler, fallback = denied()) {
  return async (...args) => {
    const m = await currentMembership()

    if (!m) return fallback

    return handler(...args)
  }
}
