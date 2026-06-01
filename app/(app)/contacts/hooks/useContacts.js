'use client'

import { useState, useEffect } from 'react'
import { listContactsAction } from '../actions/listContacts'

export function useContacts() {
  const [contacts, setContacts] = useState([])
  const [loading, setLoading] = useState(true)
  const [tick, setTick] = useState(0)

  useEffect(() => {
    listContactsAction().then((rows) => {
      setContacts(rows)
      setLoading(false)
    })
  }, [tick])

  return { contacts, loading, reload: () => setTick((n) => n + 1) }
}
