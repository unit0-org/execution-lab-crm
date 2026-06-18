import { createMentionNotifications } from './createMentionNotifications'
import { emailMentionTargets } from './emailMentionTargets'

// Fan newly-added mentions out to in-app notifications + emails, never to
// the author. `recipientUserIds` should be the new mentions only.
export async function notifyNewMentions(input) {
  const targets = input.recipientUserIds
    .filter((id) => id !== input.actorUserId)

  if (targets.length === 0) return { notified: 0 }

  await createMentionNotifications({ ...input, recipientUserIds: targets })
  await emailMentionTargets(input, targets)

  return { notified: targets.length }
}
