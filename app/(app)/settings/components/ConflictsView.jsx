'use client'

import { useRouter } from 'next/navigation'
import { Stack } from '@/ui/layout/Stack'
import { SectionHeader } from '@/ui/molecules/SectionHeader'
import { ConflictsTable } from './ConflictsTable'

export function ConflictsView({ conflicts }) {
  const router = useRouter()
  const reload = () => router.refresh()

  return (
    <Stack gap="md">
      <SectionHeader title="Sync conflicts" />
      <ConflictsTable conflicts={conflicts} onResolved={reload} />
    </Stack>
  )
}
