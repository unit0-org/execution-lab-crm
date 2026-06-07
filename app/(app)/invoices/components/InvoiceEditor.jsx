'use client'

import { Stack } from '@/ui/layout/Stack'
import { Button } from '@/ui/atoms/Button'
import { FieldError } from '@/ui/atoms/FieldError'
import { ClientField } from './ClientField'
import { InvoiceDateFields } from './InvoiceDateFields'
import { InvoiceLineItems } from './InvoiceLineItems'
import { GstCheckbox } from './GstCheckbox'
import { InvoiceTotalsPreview } from './InvoiceTotalsPreview'
import { useInvoiceEditor } from '../hooks/useInvoiceEditor'

export function InvoiceEditor({ mode, initial }) {
  const editor = useInvoiceEditor(mode, initial)
  const { fields, items, totals, save, error } = editor

  return (
    <Stack gap="md">
      <ClientField client={fields.client} onChange={fields.setClient} />
      <InvoiceDateFields fields={fields} />
      <InvoiceLineItems items={items} />
      <GstCheckbox gst={fields.gst} onGst={fields.onGst} />
      <InvoiceTotalsPreview totals={totals} />
      <Button tone="primary" onClick={save}>Save invoice</Button>
      <FieldError message={error} />
    </Stack>
  )
}
