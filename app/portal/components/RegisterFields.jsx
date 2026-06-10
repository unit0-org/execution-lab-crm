import { TextField } from '@/ui/atoms/TextField'

// The applicant fields for a cohort registration. Required mirrors the
// server-side revalidation so the browser blocks empty submits too.
export function RegisterFields() {
  return (
    <>
      <TextField label="First name" name="first_name" required />
      <TextField label="Last name" name="last_name" required />
      <TextField label="Email" name="email" type="email" required />
      <TextField label="Phone" name="phone" type="tel" required />
      <TextField label="Company" name="company" required />
      <TextField label="Role" name="role" required />
      <TextField label="How did you hear about us?"
        name="referral_source" required />
    </>
  )
}
