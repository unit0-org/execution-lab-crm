'use client'

import { useState, useEffect } from 'react'
import { getContactAction } from '../actions/getContact'

export function useContact(id) {
  const [contact, setContact] = useState(undefined)
  const [n, setN] = useState(0)

  useEffect(() => {
    getContactAction(id).then(setContact)
  }, [id, n])

  return { contact, refresh: () => setN((x) => x + 1) }
}
