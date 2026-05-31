'use client'

import { useState } from 'react'

export function useEmailList() {
  const [emails, setEmails] = useState([''])

  const add = () => setEmails([...emails, ''])
  const change = (i, value) =>
    setEmails(emails.map((e, j) => (j === i ? value : e)))

  return { emails, add, change }
}
