import { Stack } from '@/ui/layout/Stack'
import { DateText } from '@/ui/atoms/DateText'
import { Badge } from '@/ui/atoms/Badge'
import { InfoRow } from './InfoRow'

export function MeetingInfo({ meeting }) {
  const tone = meeting.online ? 'accent' : 'neutral'
  const kind = meeting.online ? 'Online' : 'In person'

  return (
    <Stack gap="sm">
      <InfoRow label="Date"><DateText value={meeting.starts_at} /></InfoRow>
      <InfoRow label="Type"><Badge tone={tone}>{kind}</Badge></InfoRow>
    </Stack>
  )
}
