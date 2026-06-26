'use client'

import { useState } from 'react'
import { showToast } from '@/ui/molecules/toastBus'
import { setMemberToolAccessAction }
  from '../actions/setMemberToolAccess'

// Per-member tool access state: optimistic toggle that calls the action and
// reverts to the prior keys on failure. `initial` is the granted keys.
export function useMemberToolAccess(contactId, initial) {
  const [keys, setKeys] = useState(initial)

  const has = (key) => keys.includes(key)
  const next = (key) =>
    has(key) ? keys.filter((k) => k !== key) : [...keys, key]

  const toggle = (key) => {
    const enabled = !has(key)
    const prev = keys
    setKeys(next(key))
    setMemberToolAccessAction(contactId, key, enabled).then((res) => {
      if (!res?.error) return
      setKeys(prev)
      showToast(res.error)
    })
  }

  return { count: keys.length, has, toggle }
}
