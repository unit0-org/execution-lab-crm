// Map create_invoice tool args into createInvoice() controller input.
export function createInvoiceData(args) {
  return {
    billToName: args.billToName,
    billToEmail: args.billToEmail,
    contactId: args.contactId,
    notes: args.notes,
    line: {
      description: args.description,
      quantity: args.quantity || 1,
      unitAmountCents: args.unitAmountCents
    }
  }
}
