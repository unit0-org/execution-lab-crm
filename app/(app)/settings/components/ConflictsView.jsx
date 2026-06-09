'use client'

import { Stack } from '@/ui/layout/Stack'
import { SectionHeader } from '@/ui/molecules/SectionHeader'
import { useConflicts } from '../hooks/useConflicts'
import { ConflictsTable } from './ConflictsTable'

export function ConflictsView() {
  const { conflicts, reload } = useConflicts()

  return (
    <Stack gap="md">
      <SectionHeader title="Sync conflicts" />
      <ConflictsTable conflicts={conflicts} onResolved={reload} />
    </Stack>
  )
}
