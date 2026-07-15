import { paymentState } from '@/lib/registration/models/paymentState'
import { registrantAmountText } from './registrantAmountText'
import { AmountLink } from './AmountLink'

// What a registrant actually paid, for the roster; a dash until the seat is
// paid, linking to the Stripe transaction when there is one.
export function RegistrantAmount({ registration }) {
  if (paymentState(registration) !== 'paid') return '—'

  return (
    <AmountLink href={registration.stripe_url}>
      {registrantAmountText(registration)}
    </AmountLink>
  )
}
