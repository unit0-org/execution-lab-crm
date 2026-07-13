import { Spinner } from '@/ui/atoms/Spinner'
import { Icon } from '@/ui/atoms/Icon'

/** Sync status glyph: a refresh icon, or a spinner while syncing. */
export function SyncIcon({ syncing }) {
  if (syncing) return <Spinner size={16} />

  return <Icon name="refresh" size={16} />
}
