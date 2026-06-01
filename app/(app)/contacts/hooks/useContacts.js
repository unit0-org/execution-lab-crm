'use client'

import { useState, useEffect } from 'react'
import { listContactsAction } from '../actions/listContacts'

export function useContacts() {
  const [contacts, setContacts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    listContactsAction().then((rows) => {
      setContacts(rows)
      setLoading(false)
    })
  }, [])

  return { contacts, loading }
}
