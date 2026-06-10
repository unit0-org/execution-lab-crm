'use client'

import { useContext } from 'react'
import { FormValuesContext } from './FormValuesContext'

// React clears uncontrolled forms once a submit settles — wiping what the
// user typed even when it failed. The Form stashes the submitted values and
// we feed them back here. Controlled fields own their state, so leave them.
export function useRestoredField({ name, value, defaultValue }) {
  const values = useContext(FormValuesContext)

  if (value !== undefined) return { value }

  const restored = values?.[name]

  return { defaultValue: restored == null ? defaultValue : restored }
}
