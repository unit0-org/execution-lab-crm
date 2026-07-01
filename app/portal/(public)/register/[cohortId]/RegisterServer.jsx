import { openCohort } from '@/lib/portal/openCohort'
import { cohortIsFull } from '@/lib/portal/cohortIsFull'
import { cohortCard } from '@/lib/portal/cohortCard'
import { todayIso } from '@/lib/portal/todayIso'
import { registrationPhase } from '@/lib/cohort/controllers'
import { registerEntry } from './registerEntry'
import { RegisterClosed } from '../../../components/RegisterClosed'
import { RegisterFull } from '../../../components/RegisterFull'
import { RegisterView } from '../../../components/RegisterView'

// Load one open cohort; a valid invite skips the full check + prefills, a
// valid ?code= coupon reflects in the price and prefills the promo field.
export async function RegisterServer({ params, searchParams }) {
  const { cohortId } = await params
  const cohort = await openCohort(cohortId)

  if (!cohort) return <RegisterClosed />

  const { invite, coupon } = await registerEntry(cohort.id, searchParams)
  const phase = registrationPhase(cohort, todayIso())
  const open = phase === 'register' || phase === 'waitlist'

  if (!invite && !open) return <RegisterClosed />

  if (!invite && await cohortIsFull(cohort)) return <RegisterFull />

  const card = await cohortCard(cohort, coupon)

  return <RegisterView card={card} invite={invite} coupon={coupon} />
}
