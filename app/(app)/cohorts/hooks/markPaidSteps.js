import { showToast } from '@/ui/molecules/toastBus'
import { markRegistrationPaidAction } from '../actions/markRegistrationPaid'
import { invoiceRegistrationAction } from '../actions/invoiceRegistration'

const toast = (result) =>
  showToast(result && result.error ? result.error : 'Invoice sent')

// Mark the registrant paid, toast, then advance to the invoice step.
export function runMarkPaid(registrationId, onPaid) {
  return markRegistrationPaidAction(registrationId)
    .then(() => {
      showToast('Marked as paid')
      onPaid()
    })
    .catch(() => showToast('Could not mark as paid'))
}

// Create + send the invoice, toast the result, then always finish.
export function runInvoice(registrationId, amount, onDone) {
  return invoiceRegistrationAction(registrationId, amount)
    .then(toast)
    .catch(() => showToast('Could not send invoice'))
    .finally(onDone)
}
