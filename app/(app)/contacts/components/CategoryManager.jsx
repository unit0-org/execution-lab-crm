'use client'

import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { CategoryManagerRow } from './CategoryManagerRow'
import { AddCategoryForm } from './AddCategoryForm'

// Manage the category list: add, delete, toggle each one's lead setting.
export function CategoryManager({ cats }) {
  return (
    <Stack gap="sm">
      <Heading level={3} gutter="none">Manage categories</Heading>
      {cats.categories.map((c) => (
        <CategoryManagerRow key={c.id} category={c}
          onLeads={cats.toggle} onDelete={cats.remove} />
      ))}
      <AddCategoryForm onAdd={cats.create} />
    </Stack>
  )
}
