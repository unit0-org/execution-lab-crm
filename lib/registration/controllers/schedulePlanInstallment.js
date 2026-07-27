import { RegistrationInstallment } from '../models'
import { resolvePlanChargeDate } from '@/lib/cohort/controllers'

// Once a plan deposit lands, schedule its second half for the cohort's
// mid-program Monday. findOrCreate (behind the row's unique key) keeps a
// replayed payment notification from scheduling it twice.
export async function schedulePlanInstallment(registration, cohort) {
  if (!registration.payment_plan) return

  if (!cohort?.start_date) return

  await RegistrationInstallment.findOrCreate({
    where: {
      registration_id: registration.id,
      due_on: resolvePlanChargeDate(cohort.start_date)
    }
  })
}
