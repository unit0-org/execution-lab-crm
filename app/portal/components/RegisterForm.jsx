'use client'

import { Form } from '@/ui/molecules/Form'
import { Stack } from '@/ui/layout/Stack'
import { RegisterFields } from './RegisterFields'
import { RegisterSubmit } from './RegisterSubmit'
import { inviteDefaults } from './inviteDefaults'
import { usePortalCheckout } from '../hooks/usePortalCheckout'

// The registration form; submitting opens Stripe Checkout. An invite
// prefills the fields and rides along as a hidden token (3.2).
export function RegisterForm({ cohortId, invite, state, promo, holdHours }) {
  const { action, error } = usePortalCheckout(cohortId)
  const defaults = inviteDefaults(invite)

  return (
    <Form action={action}>
      <Stack gap="md">
        <input type="hidden" name="invite" value={defaults.token} />
        <RegisterFields defaults={defaults} promo={promo} />
        <RegisterSubmit state={state} error={error} holdHours={holdHours} />
      </Stack>
    </Form>
  )
}
