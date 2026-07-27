import { Registration } from '../models'
import { Cohort } from '@/lib/cohort/models'
import { chargeInstallment } from './chargeInstallment'
import { recordInstallmentFailure } from './recordInstallmentFailure'
import { trySendBalanceFailed } from './trySendBalanceFailed'

// Charge one installment, absorbing anything that goes wrong: a decline is
// recorded and the registrant emailed a link to pay it themselves, so a
// single bad card never stops the rest of the daily batch. 1 when charged.
export async function tryChargeInstallment(installment) {
  const found = await Registration.findByPk(installment.registration_id)
  const owner = await Cohort.findByPk(found?.cohort_id)

  if (!found || !owner) return 0

  const registration = found.toJSON()
  const cohort = owner.toJSON()

  try {
    const result = await chargeInstallment(installment, registration, cohort)

    return result.skipped ? 0 : 1
  } catch (e) {
    await recordInstallmentFailure(installment, e.message)
    await trySendBalanceFailed(installment, registration, cohort)

    return 0
  }
}
