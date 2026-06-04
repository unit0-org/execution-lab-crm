'use client'

import { Stack } from '@/ui/layout/Stack'
import { CategoryOption } from './CategoryOption'
import { AddCategoryForm } from './AddCategoryForm'
import { useCategories } from '../hooks/useCategories'
import { useContactCategories } from '../hooks/useContactCategories'

// The picker panel: every category as a checkbox, plus an add field.
export function CategoryMenu({ contact, onChanged }) {
  const { categories, create, toggle } = useCategories()
  const picked = useContactCategories(contact, onChanged)

  return (
    <Stack gap="sm">
      {categories.map((c) => (
        <CategoryOption key={c.id} category={c}
          checked={picked.ids.includes(c.id)}
          onToggle={picked.toggle} onLeads={toggle} />
      ))}
      <AddCategoryForm onAdd={create} />
    </Stack>
  )
}
