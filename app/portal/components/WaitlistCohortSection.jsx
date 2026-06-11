import { Stack } from '@/ui/layout/Stack'
import { SectionLabel } from '@/ui/molecules/SectionLabel'
import { ChipRadios } from '@/ui/molecules/ChipRadios'

// Pick which cohort to wait for (preselected from the ?cohort= link).
export function WaitlistCohortSection({ cohorts, selected }) {
  return (
    <Stack gap="md">
      <SectionLabel n="01">Which cohort</SectionLabel>
      <ChipRadios name="cohort_id" options={cohorts} required
        value={selected} label="Pick a cohort" />
    </Stack>
  )
}
