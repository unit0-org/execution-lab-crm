import { MeetingParticipant } from '@/lib/meeting/models'
import { foldParticipations } from './foldParticipations'

const dropDuplicate = (winner, dup, t) => dup.destroy({ transaction: t })

// One participation per (contact, meeting): drop duplicate meeting rows
// (meetings carry no per-participant answers), keeping one winner row.
export function mergeMeetingParticipations(winnerId, loserIds, t) {
  return foldParticipations(
    { model: MeetingParticipant, groupKey: 'meeting_id',
      onDuplicate: dropDuplicate },
    winnerId, loserIds, t
  )
}
