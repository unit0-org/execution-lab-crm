'use client'

import { Stack } from '@/ui/layout/Stack'
import { useMeetings } from '../hooks/useMeetings'
import { useMeetingSync } from '../hooks/useMeetingSync'
import { SyncStatus } from './SyncStatus'
import { MeetingsTable } from './MeetingsTable'
import { MeetingsSkeleton } from './MeetingsSkeleton'

export function MeetingsView() {
  const { meetings, loading, reload } = useMeetings()
  const sync = useMeetingSync(reload)

  if (loading) return <MeetingsSkeleton />

  return (
    <Stack gap="md">
      <SyncStatus lastSyncedAt={sync.lastSyncedAt} syncing={sync.syncing}
        onForce={sync.force} />
      <MeetingsTable meetings={meetings} />
    </Stack>
  )
}
