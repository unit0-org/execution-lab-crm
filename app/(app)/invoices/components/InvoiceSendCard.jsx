'use client'

import { Card } from '@/ui/atoms/Card'
import { Stack } from '@/ui/layout/Stack'
import { MonoLabel } from '@/ui/atoms/MonoLabel'
import { InvoiceComposer } from './InvoiceComposer'

export function InvoiceSendCard({ draft, onEdit }) {
  return (
    <Card>
      <Stack gap="sm">
        <MonoLabel>{draft.number}</MonoLabel>
        <InvoiceComposer draft={draft} onEdit={onEdit} />
      </Stack>
    </Card>
  )
}
