'use client'

import { useParams } from 'next/navigation'
import { Text } from '@/ui/atoms/Text'
import { useInvoice } from '../../hooks/useInvoice'
import { InvoiceDetail } from './InvoiceDetail'

export function InvoiceDetailView() {
  const { id } = useParams()
  const { invoice, refresh } = useInvoice(id)

  if (invoice === undefined) return <Text>Loading…</Text>

  if (invoice === null) return <Text>Invoice not found.</Text>

  return <InvoiceDetail invoice={invoice} onChanged={refresh} />
}
