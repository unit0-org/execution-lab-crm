import { SidebarLayout } from '@/ui/layout/SidebarLayout'
import { Stack } from '@/ui/layout/Stack'
import { RegisterHeader } from './RegisterHeader'
import { RegisterForm } from './RegisterForm'
import { OrderSummary } from './OrderSummary'
import { CouponBanner } from './CouponBanner'
import { cohortState } from './cohortState'

// The full register screen: questionnaire + sticky order summary
// (Stories 2.2–2.3). An invite turns it into a wave claim (3.2).
export function RegisterView({ card, invite, coupon }) {
  const state = invite ? 'wave' : cohortState(card).state

  return (
    <SidebarLayout
      main={
        <Stack gap="md">
          <CouponBanner code={coupon} />
          <RegisterHeader state={state} />
          <RegisterForm cohortId={card.slug} invite={invite} state={state}
            promo={coupon} />
        </Stack>
      }
      aside={<OrderSummary card={card} />} />
  )
}
