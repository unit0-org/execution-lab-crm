// The events page filtered exactly like the dashboard, so the Events
// tile's count and the rows you land on agree. The period always travels
// — "all" included — because on /events no param means every event,
// upcoming ones too, while the funnel only counts events already hosted.
export function eventsHref({ period, type }) {
  const query = new URLSearchParams({ period })

  if (type) query.set('type', type)

  return `/events?${query.toString()}`
}
