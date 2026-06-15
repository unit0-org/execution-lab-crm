import { useClipboard } from '@/ui/molecules/useClipboard'
import { payUrl } from '@/lib/portal/payUrl'

// Returns a click handler that copies the registrant's payment link
// (and toasts the outcome) so it can be shared over SMS, etc.
export function useCopyPayLink(registrationId) {
  const copy = useClipboard()

  return () => copy(payUrl(registrationId))
}
