import { upsertContact } from '@/lib/contacts/upsertContact'
import { intentForCharge } from '@/lib/stripe/intentForCharge'
import { sessionForPayment } from '@/lib/stripe/sessionForPayment'
import { sessionLineItems } from '@/lib/stripe/sessionLineItems'
import { toPurchase } from './toPurchase'
import { upsertPurchase } from './upsertPurchase'

const sessionFor = (charge, apiKey) => {
  if (!charge.payment_intent) return null

  return sessionForPayment(charge.payment_intent, apiKey)
}

// Persist one succeeded charge: the purchase (owned by the org) and its
// buyer contact.
export async function importCharge(charge, apiKey, organizationId) {
  const intent = await intentForCharge(charge, apiKey)
  const session = await sessionFor(charge, apiKey)
  const products = session ? await sessionLineItems(session.id, apiKey) : []
  const data = toPurchase(charge, session, intent, products)

  if (!data.email) return { skipped: true }

  const contact = await upsertContact(organizationId, { email: data.email })
  const purchaseId = await upsertPurchase(contact.id, data, organizationId)

  return { skipped: false, purchaseId }
}
