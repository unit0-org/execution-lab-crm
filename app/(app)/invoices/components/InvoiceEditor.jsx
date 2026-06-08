'use client'

import { Stack } from '@/ui/layout/Stack'
import { ContactAutocomplete } from
  '@/app/(app)/contacts/components/ContactAutocomplete'
import { InvoiceNumberField } from './InvoiceNumberField'
import { InvoiceDateFields } from './InvoiceDateFields'
import { InvoiceLineItems } from './InvoiceLineItems'
import { GstCheckbox } from './GstCheckbox'
import { InvoiceTotalsPreview } from './InvoiceTotalsPreview'
import { InvoiceEditorActions } from './InvoiceEditorActions'
import { useInvoiceEditor } from '../hooks/useInvoiceEditor'

export function InvoiceEditor({ mode, initial }) {
  const editor = useInvoiceEditor(mode, initial)
  const { fields, items, totals, save, canSave, error } = editor

  return (
    <Stack gap="md">
      <InvoiceNumberField fields={fields} />
      <ContactAutocomplete label="Client" value={fields.client}
        onChange={fields.setClient} allowCreate />
      <InvoiceDateFields fields={fields} />
      <InvoiceLineItems items={items} />
      <GstCheckbox gst={fields.gst} onGst={fields.onGst} />
      <InvoiceTotalsPreview totals={totals} />
      <InvoiceEditorActions onSave={save} canSave={canSave} error={error} />
    </Stack>
  )
}
