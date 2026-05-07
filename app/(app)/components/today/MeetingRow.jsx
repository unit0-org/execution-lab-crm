import { GridRow } from '@/ui/GridRow'
import { Text } from '@/ui/Text'
import { MeetingTime } from './MeetingTime'

const participantPreview = (parts = []) =>
  parts.slice(0, 3).map((p) => p.email).filter(Boolean).join(' · ')

export function MeetingRow({ meeting }) {
  return (
    <GridRow template="content-meta">
      <div>
        <Text>{meeting.title || 'Untitled meeting'}</Text>
        <Text tone="muted" size="sm">{participantPreview(meeting.meeting_participants)}</Text>
      </div>
      <MeetingTime iso={meeting.started_at} />
    </GridRow>
  )
}
