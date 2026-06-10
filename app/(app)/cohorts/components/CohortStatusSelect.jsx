'use client'

import { Select } from '@/ui/atoms/Select'
import { COHORT_STATUSES } from './cohortStatusOptions'
import { useCohortStatus } from '../hooks/useCohortStatus'

export function CohortStatusSelect({ cohort, onChanged }) {
  const { onChange } = useCohortStatus(cohort.id, onChanged)

  return (
    <Select label="" name="status" value={cohort.status}
      onChange={onChange} options={COHORT_STATUSES} />
  )
}
