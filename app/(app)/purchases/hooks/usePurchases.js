'use client'

import { useState, useEffect, useRef } from 'react'
import { listPurchasesAction } from '../actions/listPurchases'

export function usePurchases(range, initialPurchases) {
  const [purchases, setPurchases] = useState(initialPurchases)
  const [tick, setTick] = useState(0)
  const hydrated = useRef(false)

  useEffect(() => {
    if (!hydrated.current) {
      hydrated.current = true

      return
    }

    listPurchasesAction(range).then(setPurchases)
  }, [tick, range])

  return { purchases, loading: false, reload: () => setTick((n) => n + 1) }
}
