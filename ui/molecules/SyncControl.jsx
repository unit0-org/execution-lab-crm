import { EndRow } from '@/ui/layout/EndRow'
import { Text } from '@/ui/atoms/Text'
import { IconButton } from '@/ui/atoms/IconButton'
import { SyncIcon } from './SyncIcon'

/** Sync action + status: a status line with a refresh button. */
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
