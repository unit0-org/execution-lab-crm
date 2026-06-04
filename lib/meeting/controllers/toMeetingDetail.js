import {
  toParticipant, toResource, toNote
} from './meetingDetailMappers'

const owned = (shared) => (a) => !shared.has(a.url)

const resourcesOf = (meeting, shared) =>
  (meeting.attachment || []).filter(owned(shared)).map(toResource)

export function toMeetingDetail(meeting, shared) {
  return {
    id: meeting.id,
    title: meeting.title,
    starts_at: meeting.starts_at,
    online: meeting.online,
    url: meeting.url,
    participants: (meeting.participant || []).map(toParticipant),
    resources: resourcesOf(meeting, shared),
    notes: (meeting.note || []).map(toNote)
  }
}
