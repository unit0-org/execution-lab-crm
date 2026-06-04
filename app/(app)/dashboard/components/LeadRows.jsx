import { Text } from '@/ui/atoms/Text'
import { HotLeadRow } from './HotLeadRow'

// The lead rows, or a muted note when there are none.
export function LeadRows({ leads }) {
  if (!leads.length) return <Text tone="muted">No active leads yet.</Text>

  return leads.map((lead) => <HotLeadRow key={lead.id} lead={lead} />)
}
