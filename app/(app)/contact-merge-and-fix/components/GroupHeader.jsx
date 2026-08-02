'use client'

import { Inline } from '@/ui/layout/Inline'
import { Checkbox } from '@/ui/atoms/Checkbox'
import { Button } from '@/ui/atoms/Button'
import { ReasonBadges } from './ReasonBadges'

// The checkbox takes this group into the surface-wide batch; it is off for a
// group whose survivor is ambiguous, which merges from its own review only.
// Dismissing writes to the server, so it spins while it saves; merging just
// opens the review modal, which is instant.
export function GroupHeader(props) {
  const { reasons, selected, mergeable, onSelect } = props
  const { onMerge, onDismiss, dismissing } = props

  return (
    <Inline gap="sm">
      <Checkbox checked={selected} disabled={!mergeable} onChange={onSelect}
        label="Select this duplicate group" />
      <ReasonBadges reasons={reasons} />
      <Button size="sm" onClick={onMerge}>Merge…</Button>
      <Button size="sm" tone="quiet" loading={dismissing} onClick={onDismiss}>
        Not duplicates
      </Button>
    </Inline>
  )
}
