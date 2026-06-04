'use client'

import { useState, useEffect } from 'react'
import { contactSpendAction } from '../actions/contactSpend'

export function useContactSpend(contactId) {
  const [spend, setSpend] = useState(null)

  useEffect(() => {
    contactSpendAction(contactId).then(setSpend)
  }, [contactId])

  return spend
}
