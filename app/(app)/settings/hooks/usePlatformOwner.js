'use client'

import { useState, useEffect } from 'react'
import { amIPlatformOwnerAction } from '../actions/amIPlatformOwner'

// Whether the signed-in user is the CRM platform owner (undefined while
// loading), used to reveal owner-only settings.
export function usePlatformOwner() {
  const [isOwner, setIsOwner] = useState(undefined)

  useEffect(() => {
    amIPlatformOwnerAction().then(setIsOwner)
  }, [])

  return isOwner
}
