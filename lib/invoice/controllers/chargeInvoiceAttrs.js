const clientName = (purchase) => {
  const c = purchase.contact || {}
  const name = [c.first_name, c.last_name].filter(Boolean).join(' ')

  return name || purchase.email || null
}

// Invoice attributes derived from a Stripe purchase, dated to when the
// purchase was made. Created as a draft; autoInvoiceForOrg then auto-approves
// it (filing the PDF on Drive) and marks it paid, since the charge cleared.
export function chargeInvoiceAttrs(organizationId, number, purchase) {
  const at = purchase.purchased_at || new Date()

  return {
    organization_id: organizationId,
    number,
    contact_id: purchase.contact_id,
    bill_to_name: clientName(purchase),
    bill_to_email: purchase.email,
    currency: purchase.currency || 'cad',
    source: 'stripe',
    stripe_charge_id: purchase.stripe_id,
    purchase_id: purchase.id,
    status: 'draft',
    issued_at: at
  }
}
