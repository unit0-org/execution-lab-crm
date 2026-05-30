'use client'

import { Text } from '@/ui/Text'
import { RelativeTime } from '@/ui/RelativeTime'
import { useLastSync } from '../contacts/hooks/useLastSync'

// One line covering every sync source (contacts, calendar, meet) across all
// accounts — driven by sync_completed_at, which finishSync stamps once the
// whole batch wraps up.
export function GlobalSyncStatus() {
  const { running, at } = useLastSync()
  if (running) return <Text tone="muted" size="sm">Syncing…</Text>
  return <Text tone="muted" size="sm">Last synced · <RelativeTime at={at} /></Text>
}
