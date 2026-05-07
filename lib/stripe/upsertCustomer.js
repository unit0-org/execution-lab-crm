import { matchContactByEmail } from '@/lib/sync/meet/matchContact'

// Upsert a stripe_customers row tied to a contact by email.
// Returns the row id (UUID) or null if no contact matched.
export async function upsertStripeCustomer(supabase, { stripeCustomerId, email }) {
  const contactId = await matchContactByEmail(supabase, email)
  if (!contactId) return null
  const { data, error } = await supabase
    .from('stripe_customers')
    .upsert({ contact_id: contactId, stripe_customer_id: stripeCustomerId },
      { onConflict: 'stripe_customer_id' })
    .select('id').single()
  if (error) throw new Error(`upsertStripeCustomer: ${error.message}`)

  return data.id
}
