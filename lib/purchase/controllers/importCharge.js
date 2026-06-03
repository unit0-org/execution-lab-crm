import { upsertContact } from '@/lib/contacts/upsertContact'
import { sessionForPayment } from '@/lib/stripe/sessionForPayment'
import { sessionLineItems } from '@/lib/stripe/sessionLineItems'
import { toPurchase } from './toPurchase'
import { upsertPurchase } from './upsertPurchase'

const sessionFor = (charge) =>
  charge.payment_intent ? sessionForPayment(charge.payment_intent) : null

// Persist one succeeded charge: the purchase and its buyer contact. The
// Checkout session (when there is one) supplies the product names and a
// reliable buyer email.
export async function importCharge(charge) {
  const session = await sessionFor(charge)
  const products = session ? await sessionLineItems(session.id) : []
  const data = toPurchase(charge, session, products)

  if (!data.email) return { skipped: true }

  const contact = await upsertContact({ email: data.email })

  await upsertPurchase(contact.id, data)

  return { skipped: false }
}
