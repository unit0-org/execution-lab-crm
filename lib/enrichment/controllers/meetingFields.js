const COLUMNS = {
  title: 'title',
  startsAt: 'starts_at',
  endsAt: 'ends_at',
  online: 'online',
  sourceDriveId: 'source_drive_id'
}

// Map an op meeting payload to its defined DB columns, dropping any key the
// caller left undefined (so we never write a blank over an existing value).
export function meetingFields(meeting) {
  const out = {}

  for (const [key, column] of Object.entries(COLUMNS)) {
    if (meeting[key] !== undefined) out[column] = meeting[key]
  }

  return out
}
