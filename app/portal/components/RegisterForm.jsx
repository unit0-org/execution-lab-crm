'use client'

import { Form } from '@/ui/molecules/Form'
import { Stack } from '@/ui/layout/Stack'
import { Button } from '@/ui/atoms/Button'
import { FormError } from '@/ui/molecules/FormError'
import { RegisterFields } from './RegisterFields'
import { inviteDefaults } from './inviteDefaults'
import { usePortalCheckout } from '../hooks/usePortalCheckout'

// The registration form; submitting opens Stripe Checkout (Story 2.3). An
// invite prefills the fields and rides along as a hidden token (3.2).
export function RegisterForm({ cohortId, invite }) {
  const { action, error } = usePortalCheckout(cohortId)
  const defaults = inviteDefaults(invite)

  return (
    <Form action={action}>
      <Stack gap="md">
        <input type="hidden" name="invite" value={defaults.token} />
        <RegisterFields defaults={defaults} />
        <Button tone="primary" type="submit">Pay now</Button>
        <FormError message={error} />
      </Stack>
    </Form>
  )
}
