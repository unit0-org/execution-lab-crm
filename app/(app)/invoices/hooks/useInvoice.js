'use client'

import { useState, useEffect } from 'react'
import { getInvoiceAction } from '../actions/getInvoice'

export function useInvoice(id) {
  const [invoice, setInvoice] = useState(undefined)
  const [tick, setTick] = useState(0)

  useEffect(() => {
    getInvoiceAction(id).then(setInvoice)
  }, [id, tick])

  return { invoice, refresh: () => setTick((n) => n + 1) }
}
