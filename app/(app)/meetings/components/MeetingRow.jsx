import { Tr } from '@/ui/molecules/Tr'
import { Td } from '@/ui/molecules/Td'
import { Link } from '@/ui/atoms/Link'
import { DateText } from '@/ui/atoms/DateText'
import { Inline } from '@/ui/layout/Inline'
import { MeetingType } from './MeetingType'
import { TranscriptMark } from './TranscriptMark'
import { AttendeePills } from './AttendeePills'

export function MeetingRow({ meeting }) {
  return (
    <Tr>
      <Td truncate>
        <Link href={`/meetings/${meeting.id}`}>{meeting.title}</Link>
      </Td>
      <Td>
        <Inline gap="sm">
          <MeetingType online={meeting.online} />
          <TranscriptMark show={meeting.hasTranscript} />
        </Inline>
      </Td>
      <Td><DateText value={meeting.starts_at} /></Td>
      <Td><AttendeePills attendees={meeting.attendees} /></Td>
    </Tr>
  )
}
