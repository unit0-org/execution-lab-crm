'use client'

import { useState } from 'react'
import { Inline } from '@/ui/layout/Inline'
import { TextField } from '@/ui/atoms/TextField'
import { Button } from '@/ui/atoms/Button'

export function AddCategoryForm({ onAdd }) {
  const [name, setName] = useState('')

  const add = () => {
    onAdd(name)
    setName('')
  }

  return (
    <Inline gap="sm">
      <TextField label="New category" value={name}
        onChange={(e) => setName(e.target.value)} />
      <Button onClick={add}>Add</Button>
    </Inline>
  )
}
