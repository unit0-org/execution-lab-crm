import { OwnEvent, EventType } from '../models'
import { findAdoptableOrphan } from './findAdoptableOrphan'
import { backfillEventType } from './backfillEventType'

// Link a url-less import to this Luma event by setting its url, instead of
// creating a duplicate. Returns { event, created }.
async function adoptOrphan(event, url, event_type_id) {
  await event.update({ url })
  await backfillEventType(event, event_type_id)

  return { event, created: false }
}

// Find our event by url (else adopt a url-less same-title import, else by
// title), or create it. `type` is the event_type name, e.g. "online" /
// "in-person". Returns { event, created }.
export async function upsertEvent({ title, date, type, url }) {
  const event_type_id = await EventType.findIdByName(type)
  const orphan = await findAdoptableOrphan({ title, url })

  if (orphan) return adoptOrphan(orphan, url, event_type_id)

  const match = url ? { url } : { title }
  const [event, created] = await OwnEvent.findOrCreate({
    where: match,
    defaults: { title, date, url, event_type_id }
  })
  await backfillEventType(event, event_type_id)

  return { event, created }
}
