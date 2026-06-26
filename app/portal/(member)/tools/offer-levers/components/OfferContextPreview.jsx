import { Stack } from '@/ui/layout/Stack'
import { PreviewLine } from './PreviewLine'

// Collapsed-state summary of the offer context: the seed and primary outcome.
export function OfferContextPreview({ values }) {
  return (
    <Stack gap="xs">
      <PreviewLine label="Seed" value={values.seed} />
      <PreviewLine label="Primary outcome" value={values.primaryOutcome} />
    </Stack>
  )
}
