// Task titles include the contact's name + the meeting date so the
// task carries enough context when seen weeks later in Google Tasks.
const dateLabel = (iso) =>
  iso ? new Date(iso).toLocaleDateString('en', { month: 'short', day: 'numeric' }) : null

export function buildTaskTitle(text, contactName, meetingDate) {
  const who  = contactName ? ` · ${contactName}` : ''
  const when = meetingDate ? ` · ${dateLabel(meetingDate)}` : ''

  return `${text}${who}${when}`
}
