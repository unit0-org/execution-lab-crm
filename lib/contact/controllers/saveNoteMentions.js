import { handleNoteMentions }
  from '@/lib/notification/controllers/handleNoteMentions'

// Bridge a just-saved note to the mention pipeline. No-op when the caller
// passes no mention context (e.g. a non-UI write path).
export function saveNoteMentions(noteId, contactId, body, mentions) {
  if (!mentions) return Promise.resolve()

  return handleNoteMentions({
    contactId,
    noteId,
    actorUserId: mentions.actorUserId,
    actorName: mentions.actorName,
    noteExcerpt: (body || '').slice(0, 200),
    mentionedUserIds: mentions.userIds || []
  })
}
