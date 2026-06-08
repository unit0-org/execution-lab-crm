'use client'

import { useState } from 'react'

export function useInvoiceFields(initial) {
  const [client, setClient] = useState(initial.client)
  const [number, setNumber] = useState(initial.number)
  const [issuedAt, setIssuedAt] = useState(initial.issuedAt)
  const [dueAt, setDueAt] = useState(initial.dueAt)
  const [gst, setGst] = useState(initial.gst)

  const onNumber = (e) => setNumber(e.target.value)
  const onIssued = (e) => setIssuedAt(e.target.value)
  const onDue = (e) => setDueAt(e.target.value)
  const onGst = (e) => setGst(e.target.checked)

  return {
    client, setClient, gst, onGst, number, onNumber,
    issuedAt, onIssued, dueAt, onDue
  }
}
