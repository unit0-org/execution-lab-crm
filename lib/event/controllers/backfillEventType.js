// Set the event's type when it has none yet, never clobbering an existing
// one — this backfills type onto rows synced before it was mapped.
export async function backfillEventType(event, event_type_id) {
  if (event_type_id && !event.event_type_id)
    await event.update({ event_type_id })

  return event
}
