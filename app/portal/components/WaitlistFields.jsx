import { TextField } from '@/ui/atoms/TextField'

// The waitlist sign-up fields. First name and email are required; last
// name is optional. Required mirrors the server-side validation.
export function WaitlistFields() {
  return (
    <>
      <TextField label="First name" name="first_name" required />
      <TextField label="Last name" name="last_name" />
      <TextField label="Email" name="email" type="email" required />
    </>
  )
}
