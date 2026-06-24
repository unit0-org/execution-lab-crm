import { Form } from '@/ui/molecules/Form'
import { Stack } from '@/ui/layout/Stack'
import { TextField } from '@/ui/atoms/TextField'
import { Button } from '@/ui/atoms/Button'
import { sendMagicLink } from '../actions/sendMagicLink'

// Request a one-time email sign-in link. An invite link prefills the email.
export function MagicLinkForm({ defaultEmail }) {
  return (
    <Form action={sendMagicLink}>
      <Stack gap="sm">
        <TextField name="email" type="email" required label="Email"
          defaultValue={defaultEmail} placeholder="you@email.com" />
        <Button type="submit" block>Email me a sign-in link</Button>
      </Stack>
    </Form>
  )
}
