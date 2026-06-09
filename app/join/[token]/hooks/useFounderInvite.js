'use client'

import { useState, useEffect } from 'react'
import { checkFounderInviteAction } from '../../actions/checkFounderInvite'

// Resolve an invite token to a status string; undefined while loading.
export function useFounderInvite(token) {
  const [status, setStatus] = useState(undefined)

  useEffect(() => {
    checkFounderInviteAction(token).then((result) => setStatus(result.status))
  }, [token])

  return status
}
