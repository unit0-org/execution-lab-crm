import { upsertStripeCustomer } from './upsertCustomer'
import { upsertPurchase } from './upsertPurchase'

const HANDLED = new Set(['charge.succeeded', 'checkout.session.completed', 'invoice.paid'])

export async function handleStripeEvent(supabase, event) {
  if (!HANDLED.has(event.type)) return
  const obj = event.data.object
  const email = obj.customer_email || obj.receipt_email || obj.billing_details?.email
  const customerRowId = await upsertStripeCustomer(supabase, {
    stripeCustomerId: obj.customer || obj.id,
    email,
  })
  if (!customerRowId) return
  await upsertPurchase(supabase, customerRowId, obj)
}
