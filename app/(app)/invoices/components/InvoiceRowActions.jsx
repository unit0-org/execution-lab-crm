'use client'

import { Inline } from '@/ui/layout/Inline'
import { IconButton } from '@/ui/atoms/IconButton'
import { Icon } from '@/ui/atoms/Icon'
import { RowDelete } from '@/ui/molecules/RowDelete'
import { useDeleteInvoice } from '../hooks/useDeleteInvoice'

export function InvoiceRowActions({ invoice, onChanged }) {
  const remove = useDeleteInvoice(onChanged)
  const openPdf = () =>
    window.open(`/api/invoices/${invoice.id}/pdf`, '_blank')

  return (
    <Inline gap="sm" nowrap>
      <IconButton label="Download PDF" onClick={openPdf}>
        <Icon name="file" size={16} />
      </IconButton>
      <RowDelete title="Delete invoice"
        onConfirm={() => remove(invoice.id)} />
    </Inline>
  )
}
