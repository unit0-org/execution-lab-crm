'use client'

import { useState } from 'react'

// Track a chosen option value (from `{ value, label }` options) and fire
// onAdd(value) on the add action. Pairs with a Select + Add button.
export function useAddMore(options, onAdd) {
  const [value, setValue] = useState(options[0]?.value)

  const pick = (event) => setValue(event.target.value)

  const add = () => onAdd(value)

  return { value, pick, add }
}
