import { RegistrationInstallment } from '../models'

const idsOf = (registrations) => registrations.map((r) => r.id)

// The Stripe charge id of every settled installment, grouped by
// registration — the plan's second payments, which belong to the seat just
// as much as the deposit does.
export async function installmentChargeIds(registrations) {
  const rows = await RegistrationInstallment.scope('settled').findAll({
    where: { registration_id: idsOf(registrations) }
  })
  const byRegistration = new Map(registrations.map((r) => [r.id, []]))

  rows.forEach((row) =>
    byRegistration.get(row.registration_id)?.push(row.stripe_charge_id))

  return byRegistration
}
