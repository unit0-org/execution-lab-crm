'use client'

import { Stack } from '@/ui/layout/Stack'
import { useMeetings } from '../hooks/useMeetings'
import { useMeetingSync } from '../hooks/useMeetingSync'
import { SyncStatus } from './SyncStatus'
import { MeetingsList } from './MeetingsList'

export function MeetingsView() {
  const { meetings, loading, reload } = useMeetings()
  const sync = useMeetingSync(reload)

  return (
    <Stack gap="md">
      <SyncStatus lastSyncedAt={sync.lastSyncedAt} syncing={sync.syncing}
        onForce={sync.force} />
      <MeetingsList loading={loading} meetings={meetings} />
    </Stack>
  )
}
