import { Badge } from '@/ui/atoms/Badge'
import { paymentState } from '@/lib/registration/models/paymentState'
import { paymentTone } from './paymentTone'

// The registration's payment state as a toned badge — paid, pending (still
// holding a seat), or expired (hold lapsed, seat released).
export function PaymentStatus({ registration }) {
  const status = paymentState(registration)

  return <Badge tone={paymentTone(status)}>{status}</Badge>
}
