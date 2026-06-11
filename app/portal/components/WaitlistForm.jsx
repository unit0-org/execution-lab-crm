import { Form } from '@/ui/molecules/Form'
import { Stack } from '@/ui/layout/Stack'
import { Button } from '@/ui/atoms/Button'
import { FormError } from '@/ui/molecules/FormError'
import { MonoLabel } from '@/ui/atoms/MonoLabel'
import { WaitlistFields } from './WaitlistFields'

const NOTE = 'No payment now. You’re notified the moment your wave opens.'

// The waitlist form. The join action + success swap live in WaitlistJoin.
export function WaitlistForm({ action, error, cohorts, selected }) {
  return (
    <Form action={action}>
      <Stack gap="md">
        <WaitlistFields cohorts={cohorts} selected={selected} />
        <Button tone="cyan" type="submit" block>Join the waitlist →</Button>
        <MonoLabel tone="subtle" size={10} align="center">{NOTE}</MonoLabel>
        <FormError message={error} />
      </Stack>
    </Form>
  )
}
