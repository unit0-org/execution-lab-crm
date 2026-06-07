'use client'

import { useState, useEffect } from 'react'
import { listContactsAction } from '../actions/listContacts'
import { matchContacts } from './matchContacts'

export function useContactOptions(query) {
  const [contacts, setContacts] = useState([])

  useEffect(() => {
    listContactsAction().then(setContacts)
  }, [])

  return matchContacts(contacts, query)
}
