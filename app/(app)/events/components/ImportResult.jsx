import { Stack } from '@/ui/layout/Stack'
import { ImportSummary } from './ImportSummary'
import { ConfirmEventForm } from './ConfirmEventForm'

// Post-import: what was imported, then confirm the event's details.
export function ImportResult({ result }) {
  return (
    <Stack gap="lg">
      <ImportSummary result={result} />
      <ConfirmEventForm result={result} />
    </Stack>
  )
}
