'use client'

import { Inline } from '@/ui/layout/Inline'
import { Badge } from '@/ui/atoms/Badge'
import { Button } from '@/ui/atoms/Button'
import { reasonLabel } from '../hooks/reasonLabel'

// Dismissing writes to the server, so it spins while it saves; merging only
// opens the review modal, which is instant.
export function GroupHeader({ reason, onMerge, onDismiss, dismissing }) {
  return (
    <Inline gap="sm">
      <Badge tone="accent">{reasonLabel(reason)}</Badge>
      <Button size="sm" onClick={onMerge}>Merge…</Button>
      <Button size="sm" tone="quiet" loading={dismissing} onClick={onDismiss}>
        Not duplicates
      </Button>
    </Inline>
  )
}
