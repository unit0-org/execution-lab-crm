import { attachmentKind } from './attachmentKind'

const nameOf = (p) => {
  const c = p.contact || {}
  const full = [c.first_name, c.last_name].filter(Boolean).join(' ')

  return full || p.email || 'Unknown'
}

const toParticipant = (p) => ({ id: p.contact_id, name: nameOf(p) })

const toResource = (a) => ({
  id: a.id,
  title: a.title || 'Untitled',
  url: a.url,
  kind: attachmentKind(a)
})

export function toMeetingDetail(meeting) {
  return {
    id: meeting.id,
    title: meeting.title,
    starts_at: meeting.starts_at,
    online: meeting.online,
    url: meeting.url,
    participants: (meeting.participant || []).map(toParticipant),
    resources: (meeting.attachment || []).map(toResource)
  }
}
