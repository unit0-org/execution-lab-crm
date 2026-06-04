'use client'

import { useState, useEffect } from 'react'
import { listPurchasesAction } from '../actions/listPurchases'

export function usePurchases(range) {
  const [purchases, setPurchases] = useState([])
  const [loading, setLoading] = useState(true)
  const [tick, setTick] = useState(0)

  useEffect(() => {
    listPurchasesAction(range).then((rows) => {
      setPurchases(rows)
      setLoading(false)
    })
  }, [tick, range])

  return { purchases, loading, reload: () => setTick((n) => n + 1) }
}
