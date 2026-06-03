import { upsertContact } from '@/lib/contacts/upsertContact'
import { chargeFor } from '@/lib/stripe/chargeFor'
import { sessionForPayment } from '@/lib/stripe/sessionForPayment'
import { sessionLineItems } from '@/lib/stripe/sessionLineItems'
import { toPurchase } from './toPurchase'
import { upsertPurchase } from './upsertPurchase'

const productsFor = async (payment) => {
  const session = await sessionForPayment(payment.id)

  if (!session) return []

  return sessionLineItems(session.id)
}

// Persist one succeeded payment: the purchase and its buyer contact.
export async function importPayment(payment) {
  const products = await productsFor(payment)
  const charge = await chargeFor(payment)
  const data = toPurchase(payment, charge, products)

  if (!data.email) return { skipped: true }

  const contact = await upsertContact({ email: data.email })

  await upsertPurchase(contact.id, data)

  return { skipped: false }
}
