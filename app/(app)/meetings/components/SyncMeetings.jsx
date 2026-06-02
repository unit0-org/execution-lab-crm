'use client'

import { Button } from '@/ui/atoms/Button'
import { useSyncMeetings } from '../hooks/useSyncMeetings'

export function SyncMeetings({ onSynced }) {
  const { sync, syncing } = useSyncMeetings(onSynced)
  const label = syncing ? 'Syncing…' : 'Sync from Google'

  return (
    <Button onClick={sync} disabled={syncing}>{label}</Button>
  )
}
