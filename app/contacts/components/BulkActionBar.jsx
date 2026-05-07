'use client'

import { Toolbar } from '@/ui/Toolbar'
import { Button } from '@/ui/Button'
import { Inline } from '@/ui/Inline'
import { SelectionCount } from './SelectionCount'
import { BulkLabelPicker } from './BulkLabelPicker'

export function BulkActionBar({ selection, labels, onApplied }) {
  if (selection.count === 0) return null
  const onSuccess = () => { onApplied(); selection.clear() }

  return (
    <Toolbar>
      <SelectionCount count={selection.count} />
      <Inline gap="sm">
        <BulkLabelPicker selectedIds={selection.ids} labels={labels} onApplied={onSuccess} />
        <Button size="sm" onClick={selection.clear}>Clear</Button>
      </Inline>
    </Toolbar>
  )
}
