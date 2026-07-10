import { renderSection } from './renderSection'
import { followUpView } from './followUpView'
import { attendeeView } from './attendeeView'
import { customerView } from './customerView'
import { birthdayView } from './birthdayView'
import { digestShell } from './digestShell'

// Render the weekly digest as a self-contained HTML email body.
export function renderDigestHtml(digest) {
  const sections = [
    followUpView(digest.followUps),
    attendeeView(digest.attendees),
    customerView(digest.newCustomers),
    birthdayView(digest.birthdays)
  ].map(renderSection).join('')

  return digestShell(sections)
}
