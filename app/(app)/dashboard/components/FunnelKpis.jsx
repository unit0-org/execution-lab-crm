import { CardGrid } from '@/ui/layout/CardGrid'
import { Stat } from '@/ui/molecules/Stat'

// The headline row. Participants counts check-ins, unique people counts
// heads — the gap between them is how much repeat attendance we get.
export function FunnelKpis({ funnel }) {
  return (
    <CardGrid>
      <Stat label="Events" value={funnel.events} href="/events" />
      <Stat label="Participants" value={funnel.participants} />
      <Stat label="Unique people" value={funnel.unique} tone="cold" />
      <Stat label="Event → client" value={`${funnel.toClient}%`}
        tone="cool" />
      <Stat label="Event → meeting" value={`${funnel.toMeeting}%`}
        tone="accent" />
    </CardGrid>
  )
}
