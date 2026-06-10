'use client'

import { Select } from '@/ui/atoms/Select'
import { ReferralOther } from './ReferralOther'
import { useReferralField } from '../hooks/useReferralField'
import { REFERRAL_OPTIONS } from './referralOptions'

// "How did you hear about us?" as a dropdown; picking "Other" reveals a
// free-text box that the server merges back into referral_source.
export function ReferralField({ defaultValue = '' }) {
  const referral = useReferralField(defaultValue)

  return (
    <>
      <Select label="How did you hear about us?" name="referral_source"
        required options={REFERRAL_OPTIONS} defaultValue={defaultValue}
        onChange={referral.onPick} />
      <ReferralOther show={referral.isOther} />
    </>
  )
}
