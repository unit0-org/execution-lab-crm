const isEmpty = (value) => value === null || value === undefined || value === ''

// Adopt an existing row as this Google event's home. A title/time match
// refreshes every field from Google; a people-bridge match only stamps
// the event id and backfills empties, so a transcript-authored title
// (and its times) survive.
export async function adoptMeeting(row, meeting, refresh) {
  if (refresh) {
    await row.update(meeting)

    return row.id
  }

  const update = { google_event_id: meeting.google_event_id }

  for (const [column, value] of Object.entries(meeting)) {
    if (isEmpty(row[column])) update[column] = value
  }

  await row.update(update)

  return row.id
}
