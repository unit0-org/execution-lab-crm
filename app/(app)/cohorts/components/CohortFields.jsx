import { Stack } from '@/ui/layout/Stack'
import { cohortDefaults } from './cohortDefaults'
import { CohortBasicsFields } from './CohortBasicsFields'
import { CohortPricingFields } from './CohortPricingFields'

export function CohortFields({ cohort }) {
  const values = cohortDefaults(cohort)

  return (
    <Stack gap="sm">
      <CohortBasicsFields values={values} />
      <CohortPricingFields values={values} />
    </Stack>
  )
}
