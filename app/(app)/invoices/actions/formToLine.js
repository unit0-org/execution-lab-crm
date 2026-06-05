import { parseAmountCents } from '@/lib/invoice/controllers/parseAmountCents'

// Shape the add-line form into addInvoiceLine() controller input.
export function formToLine(formData) {
  return {
    description: formData.get('description'),
    quantity: Number(formData.get('quantity')) || 1,
    unitAmountCents: parseAmountCents(formData.get('unit_amount'))
  }
}
