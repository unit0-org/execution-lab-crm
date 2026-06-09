import { currentMembership } from '@/lib/org/controllers/currentMembership'
import { denied } from './denied'

// Like withOrg, but also requires the caller to be an admin of their
// organization; refuses everyone else with a 403.
export function withAdmin(handler, fallback = denied()) {
  return async (...args) => {
    const m = await currentMembership()

    if (m?.role !== 'admin') return fallback

    return handler(m.organizationId, ...args)
  }
}
