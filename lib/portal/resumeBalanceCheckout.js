import { RegistrationInstallment, Registration }
  from '@/lib/registration/models'
import { Cohort } from '@/lib/cohort/models'
import { startBalanceCheckout } from './startBalanceCheckout'

// Open a checkout for one still-unpaid installment. Null when it's already
// settled, gone, or nothing is owed — the route then sends them home.
export async function resumeBalanceCheckout(installmentId) {
  const installment = await RegistrationInstallment.findByPk(installmentId)

  if (!installment || installment.stripe_charge_id) return null

  const found = await Registration.findByPk(installment.registration_id)
  const owner = await Cohort.findByPk(found?.cohort_id)

  if (!found || !owner) return null

  return startBalanceCheckout(installment, found.toJSON(), owner.toJSON())
}
