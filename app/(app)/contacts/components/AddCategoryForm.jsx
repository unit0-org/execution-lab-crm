'use client'

import { GrowRow } from '@/ui/layout/GrowRow'
import { TextField } from '@/ui/atoms/TextField'
import { Button } from '@/ui/atoms/Button'
import { SwatchSelect } from '@/ui/molecules/SwatchSelect'
import { useAddCategoryForm } from '../hooks/useAddCategoryForm'

export function AddCategoryForm({ onAdd }) {
  const f = useAddCategoryForm(onAdd)

  return (
    <form onSubmit={f.submit}>
      <GrowRow align="end">
        <TextField name="label" value={f.name} placeholder="New label"
          autoFocus onChange={(e) => f.setName(e.target.value)} />
        <SwatchSelect value={f.color} onPick={f.setColor} />
        <Button type="submit" tone="primary">Add</Button>
      </GrowRow>
    </form>
  )
}
