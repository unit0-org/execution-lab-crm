import { Stack } from '@/ui/layout/Stack'
import { SectionHeader } from '@/ui/molecules/SectionHeader'
import { WaitlistTable } from './WaitlistTable'

// The team-facing waitlist: who's in line and whether they've been
// contacted (Story 3.3).
export function WaitlistView({ entries, cohorts }) {
  return (
    <Stack gap="md">
      <SectionHeader title="Waitlist" />
      <WaitlistTable entries={entries} cohorts={cohorts} />
    </Stack>
  )
}
