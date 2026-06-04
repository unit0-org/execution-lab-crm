import { Inline } from '@/ui/layout/Inline'
import { Link } from '@/ui/atoms/Link'
import { HeatDots } from '@/ui/atoms/HeatDots'
import { LeadReasons } from './LeadReasons'

// One lead: heat rating, name (links to the contact), and why they're hot.
export function HotLeadRow({ lead }) {
  return (
    <Inline gap="sm">
      <HeatDots rating={lead.heat} />
      <Link href={`/contacts/${lead.id}`}>{lead.name}</Link>
      <LeadReasons reasons={lead.reasons} />
    </Inline>
  )
}
