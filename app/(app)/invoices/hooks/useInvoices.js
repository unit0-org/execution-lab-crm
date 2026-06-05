'use client'

import { useState, useEffect } from 'react'
import { listInvoicesAction } from '../actions/listInvoices'

export function useInvoices() {
  const [invoices, setInvoices] = useState([])
  const [loading, setLoading] = useState(true)
  const [tick, setTick] = useState(0)

  useEffect(() => {
    listInvoicesAction().then((rows) => {
      setInvoices(rows)
      setLoading(false)
    })
  }, [tick])

  return { invoices, loading, reload: () => setTick((n) => n + 1) }
}
