import { RegistrationInstallment } from '../models'
import { stripeApiKey } from '@/lib/stripe/stripeApiKey'
import { chargeIdForIntent } from '@/lib/stripe/chargeIdForIntent'
import { settleInstallment } from './settleInstallment'

// A registrant paid their refused balance themselves. The session carries
// the installment it settles, so the seat's paid total picks the charge up
// exactly as it would have picked up an automatic one.
export async function settleInstallmentFromSession(session) {
  const id = session.metadata?.installment_id

  if (!id) return

  const installment = await RegistrationInstallment.findByPk(id)

  if (!installment || installment.stripe_charge_id) return

  const intentId = session.payment_intent

  await settleInstallment(installment, {
    intentId, chargeId: await chargeIdForIntent(intentId, stripeApiKey())
  })
}
