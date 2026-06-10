import { showToast } from '@/ui/molecules/toastBus'
import { sendPaymentReminderAction }
  from '../actions/sendPaymentReminder'

// Returns a click handler that emails the registrant a payment link
// and toasts the outcome.
export function useSendPaymentReminder(registrationId) {
  return () => {
    sendPaymentReminderAction(registrationId)
      .then(() => showToast('Payment reminder sent'))
      .catch(() => showToast('Could not send reminder'))
  }
}
