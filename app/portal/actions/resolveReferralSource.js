import { OTHER } from '../components/referralOptions'

// The referral_source for a submission: the dropdown choice, or the
// free-text "please specify" value when the applicant picked "Other".
export function resolveReferralSource(formData) {
  const choice = (formData.get('referral_source') || '').trim()

  if (choice !== OTHER) return choice

  return (formData.get('referral_source_other') || '').trim()
}
