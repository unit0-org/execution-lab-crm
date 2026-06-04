'use client'

import { MultiSelect } from '@/ui/molecules/MultiSelect'
import { useContactCategories } from '../hooks/useContactCategories'

// Multi-select dropdown to assign this contact's categories.
export function CategorySelect({ contact, categories, onChanged }) {
  const picked = useContactCategories(contact, onChanged)
  const options = categories.map((c) => ({ value: c.id, label: c.name }))

  return (
    <MultiSelect options={options} selected={picked.ids}
      onToggle={picked.toggle} placeholder="Lead" />
  )
}
