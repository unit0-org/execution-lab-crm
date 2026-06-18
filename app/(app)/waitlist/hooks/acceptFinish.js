import { showToast } from '@/ui/molecules/toastBus'

// After an accept attempt: re-enable the button, toast the outcome, and on
// success close both modals and refresh so the entry shows as accepted.
export function acceptFinish({ setSending, close, onClose, router }) {
  return (result) => {
    setSending(false)

    if (!result || result.skipped) {
      showToast('Could not accept — please try again')

      return
    }

    showToast('Accepted — payment email sent')
    close()
    onClose()
    router.refresh()
  }
}
