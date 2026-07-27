import { stripeApiKey } from '@/lib/stripe/stripeApiKey'
import { retrieveSavedCard } from '@/lib/stripe/retrieveSavedCard'
import { chargeSavedCard } from '@/lib/stripe/chargeSavedCard'
import { outstandingPlanCents } from './outstandingPlanCents'
import { settleInstallment } from './settleInstallment'
import { balanceChargeParams } from './balanceChargeParams'

// Take one seat's remaining balance from the card kept on file. Throws on
// a decline or an authentication challenge — the caller records it and
// asks the registrant to pay it themselves.
export async function chargeInstallment(installment, registration, cohort) {
  const apiKey = stripeApiKey()
  const owed = await outstandingPlanCents(registration, cohort)

  if (owed.amountCents <= 0) return { skipped: true }

  const card = await retrieveSavedCard(
    registration.stripe_payment_intent_id, apiKey
  )
  const charge = await chargeSavedCard(
    apiKey, balanceChargeParams(owed, card, registration, cohort)
  )

  await settleInstallment(installment, charge)

  return { skipped: false, chargeId: charge.chargeId }
}
