'use client'

import { IconButton } from '@/ui/atoms/IconButton'
import { Icon } from '@/ui/atoms/Icon'

// The line's trash control — hidden when it's the only line left.
export function LineRemoveButton({ show, onRemove }) {
  if (!show) return null

  return (
    <IconButton label="Remove line" onClick={onRemove}>
      <Icon name="trash" size={16} />
    </IconButton>
  )
}
