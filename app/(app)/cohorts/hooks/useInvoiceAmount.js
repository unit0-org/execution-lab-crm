import { useState, useEffect } from 'react'
import { getCohortRegularPriceAction }
  from '../actions/getCohortRegularPrice'

const toDollars = (cents) => (cents ? (cents / 100).toFixed(2) : '')

// Holds the invoice amount field, prefilled with the cohort's regular
// price once the prompt opens. The operator can edit it freely.
export function useInvoiceAmount(cohortId, open) {
  const [value, setValue] = useState('')

  useEffect(() => {
    if (!open || !cohortId) return

    getCohortRegularPriceAction(cohortId)
      .then((cents) => setValue(toDollars(cents)))
  }, [open, cohortId])

  return { value, set: (e) => setValue(e.target.value) }
}
