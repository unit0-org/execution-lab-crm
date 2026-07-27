import { IconButton } from '@/ui/atoms/IconButton'
import { Icon } from '@/ui/atoms/Icon'

// The delete a cohort can't have: the same trash, disabled, carrying the
// reason on hover — so the row shows why rather than a dead click.
export function BlockedDeleteButton({ reason }) {
  return (
    <IconButton disabled label={reason} title={reason}>
      <Icon name="trash" size={16} />
    </IconButton>
  )
}
