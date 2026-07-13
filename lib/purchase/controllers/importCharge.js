import { upsertContact } from '@/lib/contact/controllers/upsertContact'
import { intentForCharge } from '@/lib/stripe/intentForCharge'
import { sessionLineItems } from '@/lib/stripe/sessionLineItems'
import { sessionFor } from './sessionFor'
import { toPurchase } from './toPurchase'
import { upsertPurchase } from './upsertPurchase'
import { dispatchPurchaseMade }
  from '@/lib/automation/controllers/triggers/dispatchPurchaseMade'

// Persist one succeeded charge: the purchase and its buyer contact.
export async function importCharge(charge, apiKey) {
  const intent = await intentForCharge(charge, apiKey)
  const session = await sessionFor(charge, apiKey)
  const products = session ? await sessionLineItems(session.id, apiKey) : []
  const data = toPurchase(charge, session, intent, products)

  if (!data.email) return { skipped: true }

  const contact = await upsertContact({ email: data.email })
  const purchase = await upsertPurchase(contact.id, data)

  if (purchase.created) await dispatchPurchaseMade(data.email)

  return { skipped: false, purchaseId: purchase.id }
}
