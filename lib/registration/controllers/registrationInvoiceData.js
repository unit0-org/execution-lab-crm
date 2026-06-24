const fullName = (reg) =>
  [reg.first_name, reg.last_name].filter(Boolean).join(' ') || reg.email

// Shape the createInvoice payload for a registrant's cohort seat: bill the
// linked contact, one line item for the cohort at the operator's amount.
export function registrationInvoiceData(reg, amount) {
  return {
    contactId: reg.contact_id,
    billToName: fullName(reg),
    billToEmail: reg.email,
    lines: [{
      description: `${reg.cohort.label} cohort`,
      quantity: 1,
      unitAmount: amount
    }]
  }
}
