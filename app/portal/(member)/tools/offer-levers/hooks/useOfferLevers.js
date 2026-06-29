'use client'

import { useState } from 'react'
import { useClipboard } from '@/ui/molecules/useClipboard'
import { buildOfferPrompt } from '../buildOfferPrompt'
import { initialValues } from '../initialValues'

// Holds the offer-configurator field values and copies the assembled prompt
// to the clipboard. Pure client state — nothing is persisted.
export function useOfferLevers() {
  const [values, setValues] = useState(initialValues)
  const copy = useClipboard()

  const setField = (id) => (event) =>
    setValues((cur) => ({ ...cur, [id]: event.target.value }))

  const setLever = (id) => (value) =>
    setValues((cur) => ({ ...cur, [id]: value }))

  const copyPrompt = () => copy(buildOfferPrompt(values))

  return { values, setField, setLever, copyPrompt }
}
