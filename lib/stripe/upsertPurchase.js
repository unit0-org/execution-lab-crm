// Insert a purchases row for a Stripe charge / payment.
// Idempotent on stripe_payment_id.
export async function upsertPurchase(supabase, customerRowId, charge) {
  const { error } = await supabase.from('purchases').upsert({
    stripe_customer_id: customerRowId,
    stripe_payment_id: charge.id,
    product_name: charge.description || null,
    amount_cents: charge.amount,
    currency: (charge.currency || 'usd').toUpperCase().slice(0, 3),
    purchased_at: new Date(charge.created * 1000).toISOString(),
  }, { onConflict: 'stripe_payment_id' })
  if (error) throw new Error(`upsertPurchase: ${error.message}`)
}
