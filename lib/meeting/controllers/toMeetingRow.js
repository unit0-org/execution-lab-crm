import { hasTranscript } from './hasTranscript'

const nameOf = (p) => {
  const c = p.contact || {}
  const full = [c.first_name, c.last_name].filter(Boolean).join(' ')

  return full || p.email || 'Unknown'
}

const toAttendee = (p) => ({ id: p.contact_id, name: nameOf(p) })

// Meeting plus attendees, online flag and whether a transcript exists.
export function toMeetingRow(meeting) {
  return {
    id: meeting.id,
    title: meeting.title,
    starts_at: meeting.starts_at,
    online: meeting.online,
    hasTranscript: hasTranscript(meeting.attachment),
    attendees: (meeting.participant || []).map(toAttendee)
  }
}
