'use client'

import { useState, useEffect } from 'react'
import { listContactsAction } from '../actions/listContacts'
import { toContactOptions } from './toContactOptions'

export function useContactOptions() {
  const [contacts, setContacts] = useState([])

  useEffect(() => {
    listContactsAction().then(setContacts)
  }, [])

  return toContactOptions(contacts)
}
