'use client'

import { useState, useEffect } from 'react'
import { secretsStatusAction } from '../actions/secretsStatus'

export function useSecretsStatus() {
  const [status, setStatus] = useState({})
  const [tick, setTick] = useState(0)
  const reload = () => setTick((n) => n + 1)

  useEffect(() => {
    secretsStatusAction().then(setStatus)
  }, [tick])

  return { status, reload }
}
