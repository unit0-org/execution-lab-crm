'use client'

import { Inline } from '@/ui/layout/Inline'
import { ExternalLink } from '@/ui/atoms/ExternalLink'
import { Icon } from '@/ui/atoms/Icon'
import { RowDelete } from '@/ui/molecules/RowDelete'
import { useDeleteInvoice } from '../hooks/useDeleteInvoice'

export function InvoiceRowActions({ invoice, onChanged }) {
  const remove = useDeleteInvoice(onChanged)

  return (
    <Inline gap="sm" nowrap>
      <ExternalLink href={`/api/invoices/${invoice.id}/pdf`}>
        <Icon name="file" size={16} />
      </ExternalLink>
      <RowDelete title="Delete invoice"
        onConfirm={() => remove(invoice.id)} />
    </Inline>
  )
}
