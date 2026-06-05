'use client'

import { Stack } from '@/ui/layout/Stack'
import { SectionHeader } from '@/ui/molecules/SectionHeader'
import { useToggle } from '@/ui/molecules/useToggle'
import { LinesList } from './LinesList'
import { AddLineModal } from './AddLineModal'

export function InvoiceLines({ invoice, onChanged }) {
  const modal = useToggle()
  const onAdded = () => { onChanged(); modal.hide() }

  return (
    <Stack gap="sm">
      <SectionHeader title="Items" addLabel="Add line" onAdd={modal.show} />
      <LinesList lines={invoice.lines} onChanged={onChanged} />
      <AddLineModal open={modal.open} onClose={modal.hide}
        invoiceId={invoice.id} onAdded={onAdded} />
    </Stack>
  )
}
