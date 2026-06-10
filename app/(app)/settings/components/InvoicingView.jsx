'use client'

import { Text } from '@/ui/atoms/Text'
import { InvoicingForm } from './InvoicingForm'
import { useInvoiceSetting } from '../hooks/useInvoiceSetting'

export function InvoicingView() {
  const setting = useInvoiceSetting()

  if (setting === undefined) return <Text>Loading…</Text>

  const data = setting || {}

  return <InvoicingForm setting={data} />
}
