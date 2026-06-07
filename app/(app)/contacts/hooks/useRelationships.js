'use client'

import { useState, useEffect } from 'react'
import { listRelationshipsAction } from '../actions/listRelationships'

export function useRelationships(contactId) {
  const [relationships, setRelationships] = useState(null)
  const [n, setN] = useState(0)

  useEffect(() => {
    listRelationshipsAction(contactId).then(setRelationships)
  }, [contactId, n])

  return { relationships, reload: () => setN((x) => x + 1) }
}
