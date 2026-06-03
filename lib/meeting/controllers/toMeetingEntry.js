// Shape a meeting participation into a contact-activity entry.
export function toMeetingEntry(participant) {
  const meeting = participant.meeting || {}
  const medium = meeting.online ? 'online' : 'in person'

  return {
    id: `m:${participant.id}`,
    kind: 'meeting',
    href: `/meetings/${meeting.id}`,
    title: meeting.title || 'Meeting',
    date: meeting.starts_at,
    status: `Met ${medium}`,
    statusTone: 'accent'
  }
}
