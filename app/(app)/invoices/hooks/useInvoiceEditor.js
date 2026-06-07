'use client'

import { useInvoiceFields } from './useInvoiceFields'
import { useLineItems } from './useLineItems'
import { useEditorTotals } from './useEditorTotals'
import { useSubmitInvoice } from './useSubmitInvoice'
import { toInvoicePayload } from './toInvoicePayload'

export function useInvoiceEditor(mode, initial) {
  const fields = useInvoiceFields(initial)
  const items = useLineItems(initial.lines)
  const totals = useEditorTotals(items.lines, fields.gst)
  const { submit, error } = useSubmitInvoice(mode, initial.id)

  const save = () => submit(toInvoicePayload(fields, items.lines))

  return { fields, items, totals, save, error }
}
