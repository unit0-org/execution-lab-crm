'use client'

import { Form } from '@/ui/molecules/Form'
import { Stack } from '@/ui/layout/Stack'
import { Button } from '@/ui/atoms/Button'
import { FormError } from '@/ui/molecules/FormError'
import { WaitlistFields } from './WaitlistFields'
import { WaitlistThanks } from './WaitlistThanks'
import { useWaitlistJoin } from '../hooks/useWaitlistJoin'

// The public waitlist form; swaps to a thank-you on success via an early
// return (no JSX conditional).
export function WaitlistForm() {
  const { action, error, joined } = useWaitlistJoin()

  if (joined) return <WaitlistThanks />

  return (
    <Form action={action}>
      <Stack gap="md">
        <WaitlistFields />
        <Button tone="primary" type="submit">Join waitlist</Button>
        <FormError message={error} />
      </Stack>
    </Form>
  )
}
