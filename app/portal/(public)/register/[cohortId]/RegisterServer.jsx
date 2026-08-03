import { openCohort } from '@/lib/portal/openCohort'
import { cohortIsFull } from '@/lib/portal/cohortIsFull'
import { cohortCard } from '@/lib/portal/cohortCard'
import { todayIso } from '@/lib/portal/todayIso'
import { registrationPhase } from '@/lib/cohort/controllers'
import { registerEntry } from './registerEntry'
import { RegisterClosed } from '../../../components/RegisterClosed'
import { RegisterFull } from '../../../components/RegisterFull'
import { RegisterView } from '../../../components/RegisterView'

// Load one open cohort; a claim — a waitlist invite or a seat reserved for
// them — skips the closed and full checks and prefills the form, and a
// valid ?code= coupon reflects in the price and prefills the promo field.
export async function RegisterServer({ params, searchParams }) {
  const { cohortId } = await params
  const cohort = await openCohort(cohortId)

  if (!cohort) return <RegisterClosed />

  const entry = await registerEntry(cohort.id, searchParams)
  const phase = registrationPhase(cohort, todayIso())
  const open = phase === 'register' || phase === 'waitlist'
  const claim = entry.invite || entry.reservation

  if (!claim && !open) return <RegisterClosed />

  if (!claim && await cohortIsFull(cohort)) return <RegisterFull />

  const card = await cohortCard(cohort, entry.coupon)

  return <RegisterView card={card} invite={entry.invite}
    reservation={entry.reservation} coupon={entry.coupon} />
}
