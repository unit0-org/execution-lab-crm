import { scoreLead } from './scoreLead'
import { loadContactNames } from './loadContactNames'

const byScoreDesc = (a, b) => b.score - a.score

const toRow = (lead, names) => ({
  id: lead.contactId,
  name: names.get(lead.contactId)?.name || 'Unknown',
  heat: lead.heat,
  reasons: lead.reasons
})

// Top 10 leads by heat score, with names; customers excluded.
export async function hotLeads(signals) {
  const top = signals
    .filter((s) => !s.isCustomer)
    .map(scoreLead)
    .filter((s) => s.score > 0)
    .sort(byScoreDesc)
    .slice(0, 10)
  const names = await loadContactNames(top.map((l) => l.contactId))

  return top.map((l) => toRow(l, names))
}
