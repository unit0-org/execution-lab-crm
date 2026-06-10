import { Stack } from '@/ui/layout/Stack'
import { SectionHeader } from '@/ui/molecules/SectionHeader'
import { Text } from '@/ui/atoms/Text'

// Suspense fallback that reserves the header so the list never shifts.
export function WaitlistFallback() {
  return (
    <Stack gap="md">
      <SectionHeader title="Waitlist" />
      <Text tone="muted">Loading waitlist…</Text>
    </Stack>
  )
}
