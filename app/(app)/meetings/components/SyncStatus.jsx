'use client'

import { EndRow } from '@/ui/layout/EndRow'
import { Text } from '@/ui/atoms/Text'
import { IconButton } from '@/ui/atoms/IconButton'
import { Icon } from '@/ui/atoms/Icon'
import { timeAgo } from '@/ui/atoms/timeAgo'

export function SyncStatus({ lastSyncedAt, syncing, onForce }) {
  const label = syncing
    ? 'Syncing…'
    : `Last synced ${timeAgo(lastSyncedAt)}`

  return (
    <EndRow>
      <Text size="sm" tone="muted">{label}</Text>
      <IconButton label="Sync now" onClick={onForce}>
        <Icon name="refresh" size={16} />
      </IconButton>
    </EndRow>
  )
}
