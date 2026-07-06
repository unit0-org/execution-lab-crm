'use client'

import { useState } from 'react'
import { repeatableTypes } from '../offerInputTypes'

// Track the chosen repeatable type and add one when the button is clicked.
export function useAddMore(onAdd) {
  const [type, setType] = useState(repeatableTypes[0])

  const pick = (event) => setType(event.target.value)

  const add = () => onAdd(type)()

  return { type, pick, add }
}
