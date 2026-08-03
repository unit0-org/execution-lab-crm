import { showToast } from '@/ui/molecules/toastBus'
import { reserveSeatAction } from '../actions/reserveSeat'

// Reserve the seat and say what happened. A refusal (the cohort filled up
// while the email was being written, or they have already paid) is a
// message worth reading, not a silent no-op.
export function runReserve(draft, { setBusy, onClose, router }) {
  setBusy(true)

  return reserveSeatAction(draft)
    .then((result) => {
      setBusy(false)

      if (result?.error) return showToast(result.error)

      showToast('Seat reserved — email sent')
      onClose()
      router.refresh()
    })
    .catch(() => {
      setBusy(false)
      showToast('Could not reserve the seat')
    })
}
