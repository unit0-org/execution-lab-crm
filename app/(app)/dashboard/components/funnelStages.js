import { drillHref } from './drillHref'

const CONTACTS = '/contacts'
const NURTURING = 'a note, meeting, email, purchase or another event since'

// The three stages, in order. Captions say what each number means, since
// "nurturing" is a rule (any touch after the event) rather than a status
// anyone sets by hand. Each stage links to the people it counts.
export function funnelStages({ stages, participants }, filter) {
  const drill = (extra) => drillHref(CONTACTS, filter, extra)

  return [
    {
      label: '1 · Attended', value: stages.attended, tone: 'cold',
      caption: `unique participants · ${participants} check-ins`,
      href: drill({ statuses: 'checked_in_at' })
    },
    {
      label: '2 · Nurturing', value: stages.nurturing, tone: 'cool',
      caption: NURTURING, href: drill({ stage: 'nurturing' })
    },
    {
      label: '3 · Clients', value: stages.clients, tone: 'warm',
      caption: 'became a client after attending',
      href: drill({ stage: 'clients' })
    }
  ]
}
