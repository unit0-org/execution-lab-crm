import { upsertContact } from '@/lib/contacts/upsertContact'
import { sessionForPayment } from '@/lib/stripe/sessionForPayment'
import { sessionLineItems } from '@/lib/stripe/sessionLineItems'
import { toPurchase } from './toPurchase'
import { upsertPurchase } from './upsertPurchase'

const productsFor = async (charge) => {
  if (!charge.payment_intent) return []

  const session = await sessionForPayment(charge.payment_intent)

  if (!session) return []

  return sessionLineItems(session.id)
}

// Persist one succeeded charge: the purchase and its buyer contact.
export async function importCharge(charge) {
  const products = await productsFor(charge)
  const data = toPurchase(charge, products)

  if (!data.email) return { skipped: true }

  const contact = await upsertContact({ email: data.email })

  await upsertPurchase(contact.id, data)

  return { skipped: false }
}
