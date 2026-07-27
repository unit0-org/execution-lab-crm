import { Badge } from '@/ui/atoms/Badge'
import { Inline } from '@/ui/layout/Inline'
import { paymentState } from '@/lib/registration/models/paymentState'
import { paymentTone } from './paymentTone'
import { PlanBadge } from './PlanBadge'

// The registration's payment state as a toned badge — paid, pending (still
// holding a seat), or expired (hold lapsed, seat released) — followed by
// the plan badge when a paid deposit still owes its second half.
export function PaymentStatus({ registration }) {
  const status = paymentState(registration)

  return (
    <Inline gap="xs">
      <Badge tone={paymentTone(status)}>{status}</Badge>
      <PlanBadge registration={registration} />
    </Inline>
  )
}
