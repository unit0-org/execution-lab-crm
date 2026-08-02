import { CardGrid } from '@/ui/layout/CardGrid'
import { Stat } from '@/ui/molecules/Stat'
import { drillHref } from './drillHref'

const PARTICIPANTS = '/events/participants'
const CONTACTS = '/contacts'

// Every tile drills into the rows behind its number, carrying the
// dashboard's own period and type so the count you clicked and the list
// you land on describe the same thing. Check-ins go to the participation
// list; the other three count people, so they go to contacts.
export function FunnelKpis({ funnel, filter }) {
  const drill = (path, extra) => drillHref(path, filter, extra)

  return (
    <CardGrid min={150} fit>
      <Stat label="Events" value={funnel.events} href={drill('/events')} />
      <Stat label="Participants" value={funnel.participants}
        href={drill(PARTICIPANTS, { statuses: 'checked_in_at' })} />
      <Stat label="Unique participants" value={funnel.unique} tone="cold"
        href={drill(CONTACTS, { statuses: 'checked_in_at' })} />
      <Stat label="Event → meeting" value={`${funnel.toMeeting}%`}
        tone="accent" href={drill(CONTACTS, { stage: 'met' })} />
      <Stat label="Event → client" value={`${funnel.toClient}%`}
        tone="cool" href={drill(CONTACTS, { stage: 'clients' })} />
    </CardGrid>
  )
}
