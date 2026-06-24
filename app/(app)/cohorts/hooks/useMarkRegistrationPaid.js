import { useRouter } from 'next/navigation'
import { showToast } from '@/ui/molecules/toastBus'
import { markRegistrationPaidAction }
  from '../actions/markRegistrationPaid'

// Mark the registration paid, toast the outcome, and refresh the list so
// the row reflects its new paid state.
export function useMarkRegistrationPaid(registrationId) {
  const router = useRouter()

  return () => {
    markRegistrationPaidAction(registrationId)
      .then(() => {
        showToast('Marked as paid')
        router.refresh()
      })
      .catch(() => showToast('Could not mark as paid'))
  }
}
