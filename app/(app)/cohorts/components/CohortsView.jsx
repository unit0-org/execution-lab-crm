'use client'

import { useRouter } from 'next/navigation'
import { Stack } from '@/ui/layout/Stack'
import { SectionHeader } from '@/ui/molecules/SectionHeader'
import { useCohorts } from '../hooks/useCohorts'
import { CohortsList } from './CohortsList'

export function CohortsView({ initialCohorts }) {
  const router = useRouter()
  const { cohorts, reload } = useCohorts(initialCohorts)
  const create = () => router.push('/cohorts/new')

  return (
    <Stack gap="md">
      <SectionHeader title="Cohorts" addLabel="New cohort" onAdd={create} />
      <CohortsList cohorts={cohorts} onChanged={reload} />
    </Stack>
  )
}
