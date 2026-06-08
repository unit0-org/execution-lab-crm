'use client'

import { useState, useEffect, useRef } from 'react'
import { listInvoicesAction } from '../actions/listInvoices'

// Seeded with the server-rendered first load; only refetches on reload.
export function useInvoices(initialInvoices) {
  const [invoices, setInvoices] = useState(initialInvoices)
  const [tick, setTick] = useState(0)
  const hydrated = useRef(false)

  useEffect(() => {
    if (!hydrated.current) {
      hydrated.current = true

      return
    }

    listInvoicesAction().then(setInvoices)
  }, [tick])

  return { invoices, loading: false, reload: () => setTick((n) => n + 1) }
}
