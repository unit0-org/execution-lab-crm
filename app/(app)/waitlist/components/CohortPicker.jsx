'use client'

import { Select } from '@/ui/atoms/Select'
import { cohortSelectOptions } from './cohortSelectOptions'

// Choose which cohort to accept the applicant into; each option shows the
// seats left so a full cohort is obvious before picking it.
export function CohortPicker({ choice }) {
  return (
    <Select label="Cohort" value={choice.cohortId}
      onChange={(e) => choice.choose(e.target.value)}
      options={cohortSelectOptions(choice.cohorts)} />
  )
}
