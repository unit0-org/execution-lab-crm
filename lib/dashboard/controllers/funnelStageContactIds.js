import { attendeeCheckins } from './attendeeCheckins'
import { funnelMaps } from './funnelMaps'
import { toFunnelAttendee } from './toFunnelAttendee'

// Which scored flag each drillable stage is made of.
const FLAG = { nurturing: 'nurtured', met: 'met', clients: 'client' }

// The contacts behind one funnel stage, for the events given — so a stage
// on the dashboard and the list you land on are the same people, scored
// the same way. null for an unknown stage or no events, meaning "don't
// narrow", never a silently empty list.
export async function funnelStageContactIds(stage, eventIds) {
  const flag = FLAG[stage]

  if (!flag || !eventIds?.length) return null

  const [rows, maps] = await Promise.all([
    attendeeCheckins(eventIds), funnelMaps()
  ])

  return rows
    .map((row) => toFunnelAttendee(row, maps))
    .filter((attendee) => attendee[flag])
    .map((attendee) => attendee.contactId)
}
