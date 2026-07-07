'use client'

import { useState } from 'react'
import { changeOfferVersionAction } from '../actions/changeOfferVersion'

// The offer's version on the edit page: bump each part up or down, saving
// to the server and reflecting the floored result it returns.
export function useOfferVersion(offerId, initial) {
  const [version, setVersion] = useState(initial)

  const bump = (dMajor, dMinor) =>
    changeOfferVersionAction(offerId, dMajor, dMinor).then(setVersion)

  return { version, bump }
}
