const nameOf = (p) => {
  const c = p.contact || {}
  const full = [c.first_name, c.last_name].filter(Boolean).join(' ')

  return full || p.email || 'Unknown'
}

const toAttendee = (p) => ({ id: p.contact_id, name: nameOf(p) })

// Meeting plus its attendees (contact id + display name) for the list.
export function toMeetingRow(meeting) {
  return {
    id: meeting.id,
    title: meeting.title,
    starts_at: meeting.starts_at,
    attendees: (meeting.participant || []).map(toAttendee)
  }
}
