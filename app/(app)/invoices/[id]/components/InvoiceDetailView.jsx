'use client'

import { Text } from '@/ui/atoms/Text'
import { useInvoice } from '../../hooks/useInvoice'
import { InvoiceDetail } from './InvoiceDetail'

export function InvoiceDetailView({ initialInvoice }) {
  const seed = initialInvoice
  const { invoice, refresh } = useInvoice(seed?.id, seed)

  if (invoice === null) return <Text>Invoice not found.</Text>

  return <InvoiceDetail invoice={invoice} onChanged={refresh} />
}
