import { CardGrid } from '@/ui/layout/CardGrid'
import { Stat } from '@/ui/molecules/Stat'
import { eventsHref } from './eventsHref'

// The headline row, kept to one line: five compact tiles, so a narrower
// minimum than the default card grid. Participants counts check-ins,
// unique participants counts heads — the gap between them is how much
// repeat attendance we get. The Events tile drills into the events page
// carrying the same filter, so its count matches the rows you land on.
export function FunnelKpis({ funnel, filter }) {
  return (
    <CardGrid min={150} fit>
      <Stat label="Events" value={funnel.events}
        href={eventsHref(filter)} />
      <Stat label="Participants" value={funnel.participants} />
      <Stat label="Unique participants" value={funnel.unique} tone="cold" />
      <Stat label="Event → meeting" value={`${funnel.toMeeting}%`}
        tone="accent" />
      <Stat label="Event → client" value={`${funnel.toClient}%`}
        tone="cool" />
    </CardGrid>
  )
}
