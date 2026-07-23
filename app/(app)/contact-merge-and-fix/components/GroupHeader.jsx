'use client'

import { Inline } from '@/ui/layout/Inline'
import { Badge } from '@/ui/atoms/Badge'
import { Button } from '@/ui/atoms/Button'
import { reasonLabel } from '../hooks/reasonLabel'

export function GroupHeader({ reason, onMerge }) {
  return (
    <Inline gap="sm">
      <Badge tone="accent">{reasonLabel(reason)}</Badge>
      <Button size="sm" onClick={onMerge}>Merge…</Button>
    </Inline>
  )
}
