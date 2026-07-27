import { RegistrationInstallment } from '../models'
import { todayIso } from '@/lib/portal/todayIso'
import { tryChargeInstallment } from './tryChargeInstallment'
import { MAX_CHARGE_ATTEMPTS } from './installmentAttempts'

// Daily: take the second half of every payment-plan seat whose date has
// arrived (and every earlier one still unpaid — a decline is retried on the
// next run, up to the attempt cap). One seat's failure never stops the rest.
export async function chargeDueInstallments() {
  const due = await RegistrationInstallment
    .scope({ method: ['dueBy', todayIso()] })
    .findAll()
  const tryable = due.filter((row) => row.attempt_count < MAX_CHARGE_ATTEMPTS)
  let charged = 0

  for (const installment of tryable) charged += await tryChargeInstallment(
    installment
  )

  return { due: due.length, tried: tryable.length, charged }
}
