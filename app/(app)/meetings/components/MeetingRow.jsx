import { Tr } from '@/ui/molecules/Tr'
import { Td } from '@/ui/molecules/Td'
import { DateText } from '@/ui/atoms/DateText'

export function MeetingRow({ meeting }) {
  return (
    <Tr>
      <Td truncate>{meeting.title}</Td>
      <Td><DateText value={meeting.starts_at} /></Td>
      <Td>{meeting.attendees}</Td>
    </Tr>
  )
}
