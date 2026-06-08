'use client'

import { useState } from 'react'

// Hide refunded purchases by default; allow showing them all.
export function useRefundFilter(purchases) {
  const [showRefunded, setShowRefunded] = useState(false)
  const toggle = () => setShowRefunded((on) => !on)
  const visible = showRefunded
    ? purchases
    : purchases.filter((p) => !p.refunded)

  return { visible, showRefunded, toggle }
}
