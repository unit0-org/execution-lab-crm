'use client'

import { Inline } from '@/ui/layout/Inline'
import { IconButton } from '@/ui/atoms/IconButton'
import { Icon } from '@/ui/atoms/Icon'
import { Text } from '@/ui/atoms/Text'

export function SendPager({ at, total, onMove }) {
  if (total <= 1) return null

  return (
    <Inline gap="sm">
      <IconButton label="Previous invoice" disabled={at === 0}
        onClick={() => onMove(at - 1)}>
        <Icon name="chevronLeft" size={16} />
      </IconButton>
      <Text size="sm">{at + 1} of {total}</Text>
      <IconButton label="Next invoice" disabled={at === total - 1}
        onClick={() => onMove(at + 1)}>
        <Icon name="chevronRight" size={16} />
      </IconButton>
    </Inline>
  )
}
