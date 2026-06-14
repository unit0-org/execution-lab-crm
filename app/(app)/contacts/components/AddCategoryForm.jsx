'use client'

import { GrowRow } from '@/ui/layout/GrowRow'
import { TextField } from '@/ui/atoms/TextField'
import { Button } from '@/ui/atoms/Button'
import { SwatchSelect } from '@/ui/molecules/SwatchSelect'
import { useAddCategoryForm } from '../hooks/useAddCategoryForm'

export function AddCategoryForm({ onAdd }) {
  const form = useAddCategoryForm(onAdd)

  return (
    <form onSubmit={form.submit}>
      <GrowRow align="end">
        <TextField name="label" value={form.name} placeholder="New label"
          autoFocus onChange={(e) => form.setName(e.target.value)} />
        <SwatchSelect value={form.color} onPick={form.setColor} />
        <Button type="submit" tone="primary">Add</Button>
      </GrowRow>
    </form>
  )
}
