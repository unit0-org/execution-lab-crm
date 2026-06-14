import { Purchase } from '../models'

// Record a purchase once per Stripe id, refreshing it on later syncs.
export async function upsertPurchase(contactId, data) {
  const fields = {
    ...data,
    contact_id: contactId
  }

  const [purchase, created] = await Purchase.findOrCreate({
    where: { stripe_id: data.stripe_id },
    defaults: fields
  })

  if (!created) await purchase.update(fields)

  return purchase.id
}
