import { Badge } from '@/ui/atoms/Badge'
import { paymentTone } from './paymentTone'

// The registration's payment state as a toned badge.
export function PaymentStatus({ status }) {
  return <Badge tone={paymentTone(status)}>{status}</Badge>
}
