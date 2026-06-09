import { segmentRules } from '@/lib/dashboard/controllers/segmentRules'
import { toSegment } from '@/lib/dashboard/controllers/toSegment'
import { formatMoney } from '@/lib/purchase/controllers/formatMoney'

const emptyStats = () => ({
  newLeads: 0,
  activeLeads: 0,
  customers: 0,
  revenue: formatMoney(0, 'cad')
})

// Safe zero-valued summary for users without an organization membership.
export function emptySummary() {
  const empty = new Map()
  const segments = segmentRules.map((rule) =>
    toSegment({ rule, all: [] }, empty))

  return { stats: emptyStats(), hotLeads: [], segments }
}
