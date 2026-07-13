'use client'

import { StickyBar } from '@/ui/layout/StickyBar'
import { Inline } from '@/ui/layout/Inline'
import { Text } from '@/ui/atoms/Text'
import { Button } from '@/ui/atoms/Button'
import { ConfirmDialog } from './ConfirmDialog'
import { useToggle } from './useToggle'

/**
 * Sticky "N selected → Delete / Cancel" bar for a selectable table;
 * reveals when `count > 0`, and Delete opens the shared `ConfirmDialog`.
 */
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
