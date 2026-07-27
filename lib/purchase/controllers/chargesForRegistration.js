import { nearestPurchase } from './nearestPurchase'

const byStripeId = (purchases) =>
  new Map(purchases.map((purchase) => [purchase.stripe_id, purchase]))

const settledInstallments = (purchases, chargeIds) =>
  chargeIds.map((id) => byStripeId(purchases).get(id)).filter(Boolean)

// Every succeeded charge that paid for one seat: the deposit (matched by
// closeness — see nearestPurchase) and the plan installments, matched
// exactly by the charge id we recorded when we took them. Deduped by
// stripe id, so a charge that is both never counts twice.
export function chargesForRegistration(registration, purchases, chargeIds) {
  const deposit = nearestPurchase(registration, purchases)
  const settled = settledInstallments(purchases, chargeIds || [])
  const found = [deposit, ...settled].filter(Boolean)

  return [...byStripeId(found).values()]
}
