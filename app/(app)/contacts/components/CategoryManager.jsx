'use client'

import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { Table } from '@/ui/molecules/Table'
import { CategoryManagerRow } from './CategoryManagerRow'
import { AddCategoryForm } from './AddCategoryForm'

const COLS = ['Category', 'In leads', '']

// Manage the category list: add, delete, toggle each one's lead setting.
export function CategoryManager({ cats }) {
  return (
    <Stack gap="md">
      <Heading level={3} gutter="none">Manage categories</Heading>
      <Table cols={COLS}>
        {cats.categories.map((c) => (
          <CategoryManagerRow key={c.id} category={c}
            onLeads={cats.toggle} onDelete={cats.remove} />
        ))}
      </Table>
      <AddCategoryForm onAdd={cats.create} />
    </Stack>
  )
}
