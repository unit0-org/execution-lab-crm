const clientName = (purchase) => {
  const c = purchase.contact || {}
  const name = [c.first_name, c.last_name].filter(Boolean).join(' ')

  return name || purchase.email || null
}

// Invoice attributes derived from a paid Stripe purchase.
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
    status: 'paid',
    issued_at: at,
    paid_at: at
  }
}
