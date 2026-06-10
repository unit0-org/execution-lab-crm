import { TextField } from '@/ui/atoms/TextField'
import { ReferralField } from './ReferralField'

const BLANK = { first_name: '', last_name: '', email: '' }

// The applicant fields for a cohort registration. Required mirrors the
// server-side revalidation; defaults prefill an invited applicant (3.2).
export function RegisterFields({ defaults = BLANK }) {
  return (
    <>
      <TextField label="First name" name="first_name" required
        defaultValue={defaults.first_name} />
      <TextField label="Last name" name="last_name" required
        defaultValue={defaults.last_name} />
      <TextField label="Email" name="email" type="email" required
        defaultValue={defaults.email} />
      <TextField label="Phone" name="phone" type="tel" required />
      <TextField label="Company" name="company" required />
      <TextField label="Role" name="role" required />
      <ReferralField />
    </>
  )
}
