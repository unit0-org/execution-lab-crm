'use client'

import { Form } from '@/ui/molecules/Form'
import { Stack } from '@/ui/layout/Stack'
import { RegisterFields } from './RegisterFields'
import { RegisterSubmit } from './RegisterSubmit'
import { claimDefaults } from './claimDefaults'
import { usePortalCheckout } from '../hooks/usePortalCheckout'

// The registration form; submitting opens Stripe Checkout. A claim — a
// waitlist invite (3.2) or a seat reserved for them — prefills the fields
// and rides along as a hidden token, revalidated server-side on submit.
export function RegisterForm(
  { cohortId, invite, reservation, state, promo, holdHours, plan }
) {
  const { action, error } = usePortalCheckout(cohortId)
  const defaults = claimDefaults(invite, reservation)

  return (
    <Form action={action}>
      <Stack gap="md">
        <input type="hidden" name="invite" value={defaults.invite} />
        <input type="hidden" name="reservation"
          value={defaults.reservation} />
        <RegisterFields defaults={defaults} promo={promo} plan={plan} />
        <RegisterSubmit state={state} error={error} holdHours={holdHours}
          reservedUntil={reservation?.releasesOn} />
      </Stack>
    </Form>
  )
}
