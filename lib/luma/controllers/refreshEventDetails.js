// Update our OwnEvent's mutable fields from the latest Luma event data, so
// an event.updated webhook keeps the title / date / url in sync.
export function refreshEventDetails(event, apiEvent) {
  const e = apiEvent.event || apiEvent

  return event.update({ title: e.name, url: e.url, date: e.start_at })
}
