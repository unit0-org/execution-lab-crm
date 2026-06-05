import { parseAmountCents } from '@/lib/invoice/controllers/parseAmountCents'

// Shape the create-invoice form into createInvoice() controller input.
export function formToInvoice(formData) {
  return {
    billToName: formData.get('bill_to_name') || null,
    billToEmail: formData.get('bill_to_email') || null,
    notes: formData.get('notes') || null,
    line: {
      description: formData.get('description'),
      quantity: Number(formData.get('quantity')) || 1,
      unitAmountCents: parseAmountCents(formData.get('unit_amount'))
    }
  }
}
