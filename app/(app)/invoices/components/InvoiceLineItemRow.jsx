'use client'

import { Stack } from '@/ui/layout/Stack'
import { GrowRow } from '@/ui/layout/GrowRow'
import { TextField } from '@/ui/atoms/TextField'
import { LineRemoveButton } from './LineRemoveButton'
import { useLineItemRow } from '../hooks/useLineItemRow'

export function InvoiceLineItemRow({ index, line, canRemove, onUpdate,
  onRemove }) {
  const { set, remove } = useLineItemRow(index, onUpdate, onRemove)

  return (
    <Stack gap="sm">
      <GrowRow align="center">
        <TextField placeholder="Description" value={line.description}
          onChange={set('description')} />
        <TextField placeholder="Qty" type="number" value={line.quantity}
          onChange={set('quantity')} />
        <TextField placeholder="Unit (CAD)" value={line.unitAmount}
          onChange={set('unitAmount')} />
        <LineRemoveButton show={canRemove} onRemove={remove} />
      </GrowRow>
      <TextField placeholder="Detail (optional)" value={line.detail}
        onChange={set('detail')} />
    </Stack>
  )
}
