import { Form } from '@/ui/molecules/Form'
import { Stack } from '@/ui/layout/Stack'
import { TextField } from '@/ui/atoms/TextField'
import { SubmitButton } from '@/ui/atoms/SubmitButton'
import { sendMagicLink } from '../actions/sendMagicLink'

// Request a one-time email sign-in link. An invite link prefills the email.
export function MagicLinkForm({ defaultEmail }) {
  return (
    <Form action={sendMagicLink}>
      <Stack gap="sm">
        <TextField name="email" type="email" required label="Email"
          defaultValue={defaultEmail} placeholder="you@email.com" />
        <SubmitButton block>Email me a sign-in link</SubmitButton>
      </Stack>
    </Form>
  )
}
