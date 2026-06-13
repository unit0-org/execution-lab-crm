'use client'

import { useState, useEffect } from 'react'
import { listContactsAction } from '../contacts/actions/listContacts'
import { toPerson } from './toPerson'

// Loads contacts once for the command palette's people list.
export function usePeople() {
  const [people, setPeople] = useState([])

  useEffect(() => {
    listContactsAction().then((rows) => setPeople(rows.map(toPerson)))
  }, [])

  return people
}
