import { RegistrationInstallment } from '../models'
import { withPlan } from './withPlan'

const idsOf = (registrations) => registrations.map((r) => r.id)

// Enrich registrations with their payment-plan installment, so a seat that
// has only paid its deposit can say so. Registrations without one come back
// untouched — the plan fields simply stay null.
export async function attachPlanInstallments(registrations) {
  const rows = await RegistrationInstallment.findAll({
    where: { registration_id: idsOf(registrations) }
  })
  const byRegistration = new Map(
    rows.map((row) => [row.registration_id, row.toJSON()])
  )

  return registrations.map((r) => withPlan(r, byRegistration.get(r.id)))
}
