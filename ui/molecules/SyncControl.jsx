import { EndRow } from '@/ui/layout/EndRow'
import { Text } from '@/ui/atoms/Text'
import { IconButton } from '@/ui/atoms/IconButton'
import { SyncIcon } from './SyncIcon'

// A compact sync status line with a refresh button (right-aligned).
export function SyncControl({ label, syncing, onSync }) {
  return (
    <EndRow>
      <Text size="sm" tone="muted">{label}</Text>
      <IconButton label="Sync now" onClick={onSync} disabled={syncing}>
        <SyncIcon syncing={syncing} />
      </IconButton>
    </EndRow>
  )
}
