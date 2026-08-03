import { Badge } from '@/ui/atoms/Badge'
import { Inline } from '@/ui/layout/Inline'
import { paymentState } from '@/lib/registration/models/paymentState'
import { paymentTone } from './paymentTone'
import { HoldEndsNote } from './HoldEndsNote'
import { PlanBadge } from './PlanBadge'

// The registration's state as a toned badge — paid, reserved (staff held
// it for them, with the day it goes), pending (mid-checkout), expired (hold
// lapsed, seat released) or cancelled — followed by the plan badge when a
// paid deposit still owes its second half.
export function PaymentStatus({ registration }) {
  const status = paymentState(registration)

  return (
    <Inline gap="xs">
      <Badge tone={paymentTone(status)}>{status}</Badge>
      <HoldEndsNote registration={registration} status={status} />
      <PlanBadge registration={registration} />
    </Inline>
  )
}
