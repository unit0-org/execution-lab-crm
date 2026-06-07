'use client'

import { Stack } from '@/ui/layout/Stack'
import { InvoiceLineItemRow } from './InvoiceLineItemRow'

export function LineItemRows({ items }) {
  return (
    <Stack gap="sm">
      {items.lines.map((line, index) => (
        <InvoiceLineItemRow key={index} index={index} line={line}
          onUpdate={items.update} onRemove={items.remove} />
      ))}
    </Stack>
  )
}
