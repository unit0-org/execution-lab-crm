import { showToast } from '@/ui/molecules/toastBus'
import { previewReservationAction } from '../actions/previewReservation'

const FAILED = 'Could not build the reservation email'

// Build the email that reserves the seat and say what happened. Writing it
// is a round-trip, so Continue spins while it runs and a refusal (a cohort
// that has gone, a session that has expired) reads as a message rather than
// a button that does nothing.
export function runPreview(cohortId, person, { setBusy, setDraft }) {
  setBusy(true)

  return previewReservationAction(cohortId, person)
    .then((draft) => {
      setBusy(false)

      if (!draft) return showToast(FAILED)

      setDraft(draft)
    })
    .catch(() => {
      setBusy(false)
      showToast(FAILED)
    })
}
