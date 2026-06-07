'use client'

import { GrowRow } from '@/ui/layout/GrowRow'
import { TextField } from '@/ui/atoms/TextField'
import { IconButton } from '@/ui/atoms/IconButton'
import { Icon } from '@/ui/atoms/Icon'
import { useLineItemRow } from '../hooks/useLineItemRow'

export function InvoiceLineItemRow({ index, line, onUpdate, onRemove }) {
  const { set, remove } = useLineItemRow(index, onUpdate, onRemove)

  return (
    <GrowRow align="center">
      <TextField label="Description" value={line.description}
        onChange={set('description')} />
      <TextField label="Qty" type="number" value={line.quantity}
        onChange={set('quantity')} />
      <TextField label="Unit (CAD)" value={line.unitAmount}
        onChange={set('unitAmount')} />
      <IconButton label="Remove line" onClick={remove}>
        <Icon name="trash" size={16} />
      </IconButton>
    </GrowRow>
  )
}
