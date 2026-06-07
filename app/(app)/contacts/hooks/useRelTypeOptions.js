'use client'

import { useState, useEffect } from 'react'
import { listRelationshipTypesAction } from '../actions/listRelationshipTypes'

const toOption = (t) => ({ value: t.id, label: t.label })

export function useRelTypeOptions() {
  const [types, setTypes] = useState([])

  useEffect(() => {
    listRelationshipTypesAction().then(setTypes)
  }, [])

  return types.map(toOption)
}
