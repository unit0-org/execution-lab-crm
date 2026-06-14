import { EventParticipant } from '@/lib/event/models'
import { foldParticipant } from './foldParticipant'
import { foldParticipations } from './foldParticipations'

// One participation per (contact, event): fold duplicate event rows into a
// single winner row, carrying their answers over (see foldParticipant).
export function mergeParticipations(winnerId, loserIds, t) {
  return foldParticipations(
    { model: EventParticipant, groupKey: 'own_event_id',
      onDuplicate: foldParticipant },
    winnerId, loserIds, t
  )
}
