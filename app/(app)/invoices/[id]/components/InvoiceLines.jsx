'use client'

import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { LinesList } from './LinesList'

export function InvoiceLines({ invoice }) {
  return (
    <Stack gap="sm">
      <Heading gutter="none">Items</Heading>
      <LinesList lines={invoice.lines} />
    </Stack>
  )
}
