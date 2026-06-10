import { Stack } from '@/ui/layout/Stack'
import { SectionHeader } from '@/ui/molecules/SectionHeader'
import { Text } from '@/ui/atoms/Text'

// Suspense fallback that reserves the header so the list never shifts.
export function CohortsListFallback() {
  return (
    <Stack gap="md">
      <SectionHeader title="Cohorts" />
      <Text tone="muted">Loading cohorts…</Text>
    </Stack>
  )
}
