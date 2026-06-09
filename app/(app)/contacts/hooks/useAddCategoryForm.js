'use client'

import { useState } from 'react'

// Label-form state; ignores blank submits and clears the name on add.
export function useAddCategoryForm(onAdd) {
  const [name, setName] = useState('')
  const [color, setColor] = useState('blue')

  const submit = (e) => {
    e.preventDefault()
    const label = name.trim()

    if (!label) return

    onAdd(label, color)
    setName('')
  }

  return { name, setName, color, setColor, submit }
}
