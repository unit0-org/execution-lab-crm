'use client'

import { Form } from '@/ui/molecules/Form'
import { Stack } from '@/ui/layout/Stack'
import { Button } from '@/ui/atoms/Button'
import { FormError } from '@/ui/molecules/FormError'
import { RegisterFields } from './RegisterFields'
import { usePortalCheckout } from '../hooks/usePortalCheckout'

// The registration form; submitting opens Stripe Checkout (Story 2.3).
export function RegisterForm({ cohortId }) {
  const { action, error } = usePortalCheckout(cohortId)

  return (
    <Form action={action}>
      <Stack gap="md">
        <RegisterFields />
        <Button tone="primary" type="submit">Pay now</Button>
        <FormError message={error} />
      </Stack>
    </Form>
  )
}
