'use client'

import { useState, useEffect } from 'react'
import { listMembersAction } from '../actions/listMembers'

export function useMembers(organizationId) {
  const [members, setMembers] = useState([])
  const [tick, setTick] = useState(0)
  const reload = () => setTick((n) => n + 1)

  useEffect(() => {
    listMembersAction(organizationId).then(setMembers)
  }, [organizationId, tick])

  return { members, reload }
}
