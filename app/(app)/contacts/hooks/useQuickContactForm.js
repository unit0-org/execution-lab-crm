'use client'

import { useState } from 'react'

const EMPTY = { first: '', last: '', email: '' }

export function useQuickContactForm(onSubmit) {
  const [fields, setFields] = useState(EMPTY)

  const set = (key) => (e) =>
    setFields((f) => ({ ...f, [key]: e.target.value }))
  const submit = () => onSubmit(fields)

  return { fields, set, submit }
}
