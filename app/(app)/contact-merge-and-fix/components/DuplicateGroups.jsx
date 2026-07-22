'use client'

import { Stack } from '@/ui/layout/Stack'
import { SectionHeader } from '@/ui/molecules/SectionHeader'
import { DuplicateGroupList } from './DuplicateGroupList'

export function DuplicateGroups({ groups }) {
  if (!groups.list.length) return null

  return (
    <Stack gap="sm">
      <SectionHeader title="Possible duplicates" />
      <DuplicateGroupList groups={groups.list} onResolved={groups.remove} />
    </Stack>
  )
}
