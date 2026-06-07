'use client'

import { Stack } from '@/ui/layout/Stack'
import { SectionHeader } from '@/ui/molecules/SectionHeader'
import { LineItemRows } from './LineItemRows'

export function InvoiceLineItems({ items }) {
  return (
    <Stack gap="sm">
      <SectionHeader title="Line items" addLabel="Add line item"
        onAdd={items.add} />
      <LineItemRows items={items} />
    </Stack>
  )
}
