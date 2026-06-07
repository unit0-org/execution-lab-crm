'use client'

import { Stack } from '@/ui/layout/Stack'
import { Button } from '@/ui/atoms/Button'
import { FieldError } from '@/ui/atoms/FieldError'
import { ContactAutocomplete } from
  '@/app/(app)/contacts/components/ContactAutocomplete'
import { InvoiceDateFields } from './InvoiceDateFields'
import { InvoiceLineItems } from './InvoiceLineItems'
import { GstCheckbox } from './GstCheckbox'
import { InvoiceTotalsPreview } from './InvoiceTotalsPreview'
import { useInvoiceEditor } from '../hooks/useInvoiceEditor'

export function InvoiceEditor({ mode, initial }) {
  const { fields, items, totals, save, error } = useInvoiceEditor(mode, initial)

  return (
    <Stack gap="md">
      <ContactAutocomplete label="Client" value={fields.client}
        onChange={fields.setClient} allowCreate />
      <InvoiceDateFields fields={fields} />
      <InvoiceLineItems items={items} />
      <GstCheckbox gst={fields.gst} onGst={fields.onGst} />
      <InvoiceTotalsPreview totals={totals} />
      <Button tone="primary" onClick={save}>Save invoice</Button>
      <FieldError message={error} />
    </Stack>
  )
}
