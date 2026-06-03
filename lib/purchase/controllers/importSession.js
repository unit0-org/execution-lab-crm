import { upsertContact } from '@/lib/contacts/upsertContact'
import { sessionLineItems } from '@/lib/stripe/sessionLineItems'
import { toPurchase } from './toPurchase'
import { upsertPurchase } from './upsertPurchase'

// Persist one paid Checkout Session: the purchase and its buyer contact.
export async function importSession(session) {
  const products = await sessionLineItems(session.id)
  const data = toPurchase(session, products)

  if (!data.email) return { skipped: true }

  const contact = await upsertContact({ email: data.email })

  await upsertPurchase(contact.id, data)

  return { skipped: false }
}
