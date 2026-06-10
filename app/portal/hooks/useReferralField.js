'use client'

import { useState } from 'react'
import { OTHER } from '../components/referralOptions'

// Tracks whether the applicant picked "Other", so the free-text box can
// show. The Select stays uncontrolled — we only watch its changes.
export function useReferralField(initial) {
  const [isOther, setIsOther] = useState(initial === OTHER)

  const onPick = (e) => setIsOther(e.target.value === OTHER)

  return { isOther, onPick }
}
