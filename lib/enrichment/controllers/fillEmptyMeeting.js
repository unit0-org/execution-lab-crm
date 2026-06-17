import { meetingFields } from './meetingFields'

const isEmpty = (value) => value === null || value === undefined || value === ''

// Update only the columns currently empty on the meeting, so a human-set
// title or time is never clobbered (and a calendar-synced row gets stamped
// with source_drive_id). Returns the same instance.
export async function fillEmptyMeeting(meeting, payload, t) {
  const fields = meetingFields(payload)
  const update = {}

  for (const [column, value] of Object.entries(fields)) {
    if (isEmpty(meeting[column])) update[column] = value
  }

  if (Object.keys(update).length) {
    await meeting.update(update, { transaction: t })
  }

  return meeting
}
