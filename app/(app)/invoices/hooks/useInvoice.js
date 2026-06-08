'use client'

import { useState, useEffect, useRef } from 'react'
import { getInvoiceAction } from '../actions/getInvoice'

// Seeded with the server-loaded invoice; only refetches on refresh.
export function useInvoice(id, initial) {
  const [invoice, setInvoice] = useState(initial)
  const [tick, setTick] = useState(0)
  const hydrated = useRef(false)

  useEffect(() => {
    if (!hydrated.current) {
      hydrated.current = true

      return
    }

    getInvoiceAction(id).then(setInvoice)
  }, [id, tick])

  return { invoice, refresh: () => setTick((n) => n + 1) }
}
