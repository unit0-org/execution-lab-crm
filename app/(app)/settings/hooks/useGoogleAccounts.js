'use client'

import { useState, useEffect } from 'react'
import { listGoogleAccountsAction } from '../actions/listGoogleAccounts'

export function useGoogleAccounts() {
  const [accounts, setAccounts] = useState([])
  const [tick, setTick] = useState(0)
  const reload = () => setTick((n) => n + 1)

  useEffect(() => {
    listGoogleAccountsAction().then(setAccounts)
  }, [tick])

  return { accounts, reload }
}
