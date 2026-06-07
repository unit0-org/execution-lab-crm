import { toEditorClient } from './toEditorClient'
import { toEditorLine } from './toEditorLine'
import { toDateInput } from './toDateInput'

// A loaded invoice → editable editor state.
export function toEditorInitial(invoice) {
  return {
    id: invoice.id,
    client: toEditorClient(invoice),
    issuedAt: toDateInput(invoice.issued_at),
    dueAt: toDateInput(invoice.due_at),
    gst: Number(invoice.tax_rate) > 0,
    lines: invoice.lines.map(toEditorLine)
  }
}
