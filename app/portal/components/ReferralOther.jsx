import { TextField } from '@/ui/atoms/TextField'

// The free-text box shown only when the applicant picks "Other".
export function ReferralOther({ show }) {
  if (!show) return null

  return (
    <TextField label="Please specify" name="referral_source_other" required />
  )
}
