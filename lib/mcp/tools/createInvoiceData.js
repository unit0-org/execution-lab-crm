// Map create_invoice tool args into createInvoice() controller input.
export function createInvoiceData(args) {
  return {
    billToName: args.billToName,
    billToEmail: args.billToEmail,
    contactId: args.contactId,
    companyId: args.companyId,
    lines: [{
      description: args.description,
      quantity: args.quantity || 1,
      unitAmount: String((args.unitAmountCents || 0) / 100)
    }]
  }
}
