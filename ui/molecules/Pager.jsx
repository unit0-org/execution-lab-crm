'use client'

import { Inline } from '../layout/Inline'
import { IconButton } from '../atoms/IconButton'
import { Icon } from '../atoms/Icon'
import { Text } from '../atoms/Text'

/**
 * Prev/next stepper through `total` positions showing "N of total";
 * `onMove(index)` gets the new 0-based index, and it hides itself when
 * there's nothing to page. `label` names the unit for the arrows'
 * aria-labels (e.g. "invoice", "page").
 */
export function Pager({ at, total, onMove, label = 'item' }) {
  if (total <= 1) return null

  return (
    <Inline gap="sm">
      <IconButton label={`Previous ${label}`} disabled={at === 0}
        onClick={() => onMove(at - 1)}>
        <Icon name="chevronLeft" size={16} />
      </IconButton>
      <Text size="sm">{at + 1} of {total}</Text>
      <IconButton label={`Next ${label}`} disabled={at === total - 1}
        onClick={() => onMove(at + 1)}>
        <Icon name="chevronRight" size={16} />
      </IconButton>
    </Inline>
  )
}
