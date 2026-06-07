'use client'

import { useState } from 'react'

export function useInvoiceFields(initial) {
  const [client, setClient] = useState(initial.client)
  const [issuedAt, setIssuedAt] = useState(initial.issuedAt)
  const [dueAt, setDueAt] = useState(initial.dueAt)
  const [gst, setGst] = useState(initial.gst)

  const onIssued = (e) => setIssuedAt(e.target.value)
  const onDue = (e) => setDueAt(e.target.value)
  const onGst = (e) => setGst(e.target.checked)

  return {
    client, setClient, gst, onGst,
    issuedAt, onIssued, dueAt, onDue
  }
}
