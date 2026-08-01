import { CardGrid } from '@/ui/layout/CardGrid'
import { Stat } from '@/ui/molecules/Stat'

// The headline row, kept to one line: five compact tiles, so a narrower
// minimum than the default card grid. Participants counts check-ins,
// unique participants counts heads — the gap between them is how much
// repeat attendance we get.
export function FunnelKpis({ funnel }) {
  return (
    <CardGrid min={150}>
      <Stat label="Events" value={funnel.events} href="/events" />
      <Stat label="Participants" value={funnel.participants} />
      <Stat label="Unique participants" value={funnel.unique} tone="cold" />
      <Stat label="Event → meeting" value={`${funnel.toMeeting}%`}
        tone="accent" />
      <Stat label="Event → client" value={`${funnel.toClient}%`}
        tone="cool" />
    </CardGrid>
  )
}
