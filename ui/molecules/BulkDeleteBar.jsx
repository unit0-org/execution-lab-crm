'use client'

import { StickyBar } from '@/ui/layout/StickyBar'
import { ConfirmBulkDelete } from './ConfirmBulkDelete'

// The shared "N selected → Delete / Cancel" bar for any selectable table;
// stays pinned (height reserved, no CLS) and reveals when count > 0.
export function BulkDeleteBar({ count, onDelete, onCancel }) {
  return (
    <StickyBar active={count > 0}>
      <ConfirmBulkDelete count={count} onDelete={onDelete}
        onCancel={onCancel} />
    </StickyBar>
  )
}
