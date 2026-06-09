'use client'

import { useState, useEffect } from 'react'
import { listFounderInvitesAction } from '../actions/listFounderInvites'

export function useFounderInvites() {
  const [invites, setInvites] = useState([])
  const [tick, setTick] = useState(0)
  const reload = () => setTick((n) => n + 1)

  useEffect(() => {
    listFounderInvitesAction().then(setInvites)
  }, [tick])

  return { invites, reload }
}
