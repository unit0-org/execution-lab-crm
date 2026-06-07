'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { saveInvoice } from './saveInvoice'

export function useSubmitInvoice(mode, id) {
  const router = useRouter()
  const [error, setError] = useState(null)

  const submit = (payload) =>
    saveInvoice(mode, id, payload).then((res) => {
      if (res.error) return setError(res.error)

      router.push(`/invoices/${res.id}`)
    })

  return { submit, error }
}
