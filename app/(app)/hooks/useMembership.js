'use client'

import { useState, useEffect } from 'react'
import { membershipAction } from '../actions/membership'

// The current user's org membership: undefined while loading, null if
// they aren't a member, else { organizationId, role }.
export function useMembership() {
  const [membership, setMembership] = useState(undefined)

  useEffect(() => {
    membershipAction().then(setMembership)
  }, [])

  return membership
}
