import { Stack } from '@/ui/layout/Stack'
import { DateText } from '@/ui/atoms/DateText'
import { InfoRow } from './InfoRow'

export function EventInfo({ event }) {
  const type = event.type || '—'
  const url = event.url || '—'

  return (
    <Stack gap="sm">
      <InfoRow label="Date"><DateText value={event.date} /></InfoRow>
      <InfoRow label="Type">{type}</InfoRow>
      <InfoRow label="URL">{url}</InfoRow>
    </Stack>
  )
}
