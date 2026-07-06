'use client'

import { StickyBar } from '@/ui/layout/StickyBar'
import { Inline } from '@/ui/layout/Inline'
import { Text } from '@/ui/atoms/Text'
import { Button } from '@/ui/atoms/Button'
import { ConfirmDialog } from './ConfirmDialog'
import { useToggle } from './useToggle'

// Shared bulk-delete bar for a selectable table: "N selected → Delete /
// Cancel", pinned (no CLS), revealed when count > 0. Delete opens the same
// confirm modal as a single-row delete; `onCancel` clears the selection.
export function BulkDeleteBar({ count, onDelete, onCancel }) {
  const confirm = useToggle()
  const run = () => { confirm.hide(); onDelete() }

  return (
    <StickyBar active={count > 0}>
      <Inline gap="md">
        <Text size="sm">{count} selected</Text>
        <Button tone="danger" size="sm" onClick={confirm.show}>Delete</Button>
        <Button size="sm" onClick={onCancel}>Cancel</Button>
      </Inline>
      <ConfirmDialog open={confirm.open} title={`Delete ${count}?`}
        onConfirm={run} onCancel={confirm.hide} />
    </StickyBar>
  )
}
