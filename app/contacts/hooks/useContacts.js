'use client'

import { useState, useEffect } from 'react'
import { listContactsAction } from '../data'

export function useContacts() {
  const [contacts, setContacts] = useState([])

  useEffect(() => {
    listContactsAction().then(setContacts)
  }, [])

  return { contacts }
}
