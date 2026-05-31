'use client'

import { useState, useEffect } from 'react'
import { listContactsAction } from '../actions/listContacts'

export function useContacts() {
  const [contacts, setContacts] = useState([])

  useEffect(() => {
    listContactsAction().then(setContacts)
  }, [])

  return { contacts }
}
