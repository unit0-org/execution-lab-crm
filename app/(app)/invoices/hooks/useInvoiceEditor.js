'use client'

import { useInvoiceFields } from './useInvoiceFields'
import { useLineItems } from './useLineItems'
import { useEditorTotals } from './useEditorTotals'
import { useSubmitInvoice } from './useSubmitInvoice'
import { toInvoicePayload } from './toInvoicePayload'
import { isInvoiceValid } from './isInvoiceValid'

export function useInvoiceEditor(mode, initial) {
  const fields = useInvoiceFields(initial)
  const items = useLineItems(initial.lines)
  const totals = useEditorTotals(items.lines, fields.gst)
  const { submit, error } = useSubmitInvoice(mode, initial.id)

  const save = () => submit(toInvoicePayload(fields, items.lines))
  const canSave = isInvoiceValid(fields, items.lines)

  return { fields, items, totals, save, canSave, error }
}
