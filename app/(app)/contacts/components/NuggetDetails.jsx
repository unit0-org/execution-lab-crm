import { Stack } from '@/ui/layout/Stack'
import { DateText } from '@/ui/atoms/DateText'
import { DetailRow } from './DetailRow'

// Provenance shown when a nugget card is expanded. Built to grow as we
// learn more about where a fact came from.
export function NuggetDetails({ nugget, open }) {
  if (!open) return null

  return (
    <Stack gap="sm">
      <DetailRow label="Source">{nugget.event}</DetailRow>
      <DetailRow label="Date"><DateText value={nugget.date} /></DetailRow>
    </Stack>
  )
}
