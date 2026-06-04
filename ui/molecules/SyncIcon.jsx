import { Spinner } from '@/ui/atoms/Spinner'
import { Icon } from '@/ui/atoms/Icon'

// A refresh icon, or a spinner while a sync is in flight.
export function SyncIcon({ syncing }) {
  if (syncing) return <Spinner size={16} />

  return <Icon name="refresh" size={16} />
}
