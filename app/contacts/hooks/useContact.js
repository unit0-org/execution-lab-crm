'use client'

import { useState, useEffect } from 'react'
import { getContactAction } from '../data'

export function useContact(id) {
  const [contact, setContact] = useState(undefined)

  useEffect(() => {
    getContactAction(id).then(setContact)
  }, [id])

  return { contact }
}
