'use client'

import { useState } from 'react'
import { GrowRow } from '@/ui/layout/GrowRow'
import { TextField } from '@/ui/atoms/TextField'
import { Button } from '@/ui/atoms/Button'
import { SwatchSelect } from '@/ui/molecules/SwatchSelect'

export function AddCategoryForm({ onAdd }) {
  const [name, setName] = useState('')
  const [color, setColor] = useState('blue')

  const add = () => {
    onAdd(name, color)
    setName('')
  }

  return (
    <GrowRow align="end">
      <TextField name="label" value={name} placeholder="New label"
        onChange={(e) => setName(e.target.value)} />
      <SwatchSelect value={color} onPick={setColor} />
      <Button tone="primary" onClick={add}>Add</Button>
    </GrowRow>
  )
}
