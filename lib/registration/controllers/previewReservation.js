import { randomUUID } from 'crypto'
import { getCohort } from '@/lib/cohort/controllers'
import { renderEmailMessage }
  from '@/lib/email/controllers/renderEmailMessage'
import { holdEndsAt } from '@/lib/registration/models/holdEndsAt'
import { reservationVars } from './reservationVars'

// An editable draft of the email a reserved person would receive, built
// before anything is written so the team can read it and add a personal
// note before committing the seat. It carries the id the send step will
// create, so the link reviewed here is the link that ends up working.
export async function previewReservation(cohortId, person) {
  const cohort = await getCohort(cohortId)

  if (!cohort) return null

  const registrationId = randomUUID()
  const releasesAt = holdEndsAt({ reserved_at: new Date() })
  const vars = reservationVars({ person, cohort, registrationId, releasesAt })
  const message = await renderEmailMessage('seat_reserved', vars)

  return { ...person, cohortId, registrationId, to: person.email, ...message }
}
