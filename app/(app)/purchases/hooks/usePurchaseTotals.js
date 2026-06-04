'use client'

import { useState, useEffect } from 'react'
import { sumPurchasesByBucketAction } from '../actions/sumPurchasesByBucket'

export function usePurchaseTotals(window, grain) {
  const [buckets, setBuckets] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    sumPurchasesByBucketAction(window, grain).then((rows) => {
      setBuckets(rows)
      setLoading(false)
    })
  }, [window, grain])

  return { buckets, loading }
}
