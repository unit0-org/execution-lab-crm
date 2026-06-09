import { segmentRules } from './segmentRules'
import { loadContactNames } from './loadContactNames'
import { toSegment } from './toSegment'

// Lead segments (customers excluded), each capped, with contact names.
export async function leadSegments(organizationId, signals) {
  const leads = signals.filter((s) => !s.isCustomer)
  const groups = segmentRules.map((rule) => ({
    rule, all: leads.filter(rule.test)
  }))
  const ids = groups.flatMap((g) => g.all.slice(0, 6).map((s) => s.contactId))
  const names = await loadContactNames(organizationId, ids)

  return groups.map((g) => toSegment(g, names))
}
