import { ContactEmailMessage } from '@/lib/email/models'
import { foldParticipations } from './foldParticipations'

const dropDuplicate = (winner, dup, t) => dup.destroy({ transaction: t })

// One email row per (contact, message): when the same message was synced to
// both the winner and a loser, drop the duplicate and keep a single winner
// row — a straight reassign would collide on the
// (gmail_message_id, contact_id) unique index.
export function mergeEmailMessages(winnerId, loserIds, t) {
  return foldParticipations(
    { model: ContactEmailMessage, groupKey: 'gmail_message_id',
      onDuplicate: dropDuplicate },
    winnerId, loserIds, t
  )
}
