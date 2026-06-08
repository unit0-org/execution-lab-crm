const dollars = (formatted) =>
  String(formatted || '').replace(/[^0-9.]/g, '')

// A loaded invoice line → an editable editor row.
export function toEditorLine(line) {
  return {
    description: line.description || '',
    detail: line.detail || '',
    quantity: String(line.quantity || 1),
    unitAmount: dollars(line.unitAmount)
  }
}
