'use client'

import { useState } from 'react'
import { Stack } from '@/ui/layout/Stack'
import { GrowRow } from '@/ui/layout/GrowRow'
import { TextField } from '@/ui/atoms/TextField'
import { Button } from '@/ui/atoms/Button'
import { LabelColorPicker } from './LabelColorPicker'

export function AddCategoryForm({ onAdd }) {
  const [name, setName] = useState('')
  const [color, setColor] = useState('blue')

  const add = () => {
    onAdd(name, color)
    setName('')
  }

  return (
    <Stack gap="sm">
      <LabelColorPicker value={color} onPick={setColor} />
      <GrowRow align="end">
        <TextField name="label" value={name} placeholder="New label"
          onChange={(e) => setName(e.target.value)} />
        <Button tone="primary" onClick={add}>Add</Button>
      </GrowRow>
    </Stack>
  )
}
