import { Form } from '@/ui/molecules/Form'
import { Stack } from '@/ui/layout/Stack'
import { TextField } from '@/ui/atoms/TextField'
import { SubmitButton } from '@/ui/atoms/SubmitButton'
import { TextButton } from '@/ui/atoms/TextButton'
import { signInWithPassword } from '../actions/signInWithPassword'
import { sendMagicLink } from '../actions/sendMagicLink'

// One email field, two ways to use it: sign in with the password set for you
// in the CRM, or have a one-time link emailed instead. The link path never
// looks at the password, which is why the field isn't required.
export function EmailSignInForm({ defaultEmail }) {
  return (
    <Form action={signInWithPassword}>
      <Stack gap="sm">
        <TextField name="email" type="email" required label="Email"
          defaultValue={defaultEmail} placeholder="you@email.com" />
        <TextField name="password" type="password" label="Password" />
        <SubmitButton block>Sign in</SubmitButton>
        <TextButton formAction={sendMagicLink}>
          Email me a sign-in link instead
        </TextButton>
      </Stack>
    </Form>
  )
}
