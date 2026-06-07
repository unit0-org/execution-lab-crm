'use client'

import { useState } from 'react'

export function useQuickContactForm(onSubmit, initialFirst) {
  const [fields, setFields] = useState({
    first: initialFirst || '', last: '', email: ''
  })

  const set = (key) => (e) =>
    setFields((f) => ({ ...f, [key]: e.target.value }))
  const submit = () => onSubmit(fields)

  return { fields, set, submit }
}
