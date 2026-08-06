import { showToast } from '@/ui/molecules/toastBus'
import { sendResultMessage } from './sendResultMessage'

// Handle a bulk-send result: re-enable the button, toast the outcome, and
// only on full success close the modal and refresh. A failure keeps the
// modal open (with the reason shown) so the user can fix and retry — and so
// does a batch that sent nothing at all (every invoice unsendable), which
// used to close on "no failures" and read as success.
export function sendFinish({ setSending, close, onDone }) {
  return (result) => {
    setSending(false)
    showToast(sendResultMessage(result))

    if (result.sent && !result.failed) { close(); onDone() }
  }
}
