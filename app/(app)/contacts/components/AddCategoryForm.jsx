'use client'

import { useState } from 'react'
import { GrowRow } from '@/ui/layout/GrowRow'
import { TextField } from '@/ui/atoms/TextField'
import { Button } from '@/ui/atoms/Button'

export function AddCategoryForm({ onAdd }) {
  const [name, setName] = useState('')

  const add = () => {
    onAdd(name)
    setName('')
  }

  return (
    <GrowRow align="end">
      <TextField name="category" value={name} placeholder="New category"
        onChange={(e) => setName(e.target.value)} />
      <Button tone="primary" onClick={add}>Add</Button>
    </GrowRow>
  )
}
