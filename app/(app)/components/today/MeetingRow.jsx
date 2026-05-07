import { rowStyle, titleStyle, metaStyle } from './MeetingRow.styles'
import { MeetingTime } from './MeetingTime'

const participantPreview = (parts = []) =>
  parts.slice(0, 3).map((p) => p.email).filter(Boolean).join(' · ')

export function MeetingRow({ meeting }) {
  return (
    <div style={rowStyle}>
      <div>
        <div style={titleStyle}>{meeting.title || 'Untitled meeting'}</div>
        <div style={metaStyle}>{participantPreview(meeting.meeting_participants)}</div>
      </div>
      <MeetingTime iso={meeting.started_at} />
    </div>
  )
}
