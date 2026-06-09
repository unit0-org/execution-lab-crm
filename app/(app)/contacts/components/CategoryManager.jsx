'use client'

import { Stack } from '@/ui/layout/Stack'
import { Table } from '@/ui/molecules/Table'
import { SectionHeader } from '@/ui/molecules/SectionHeader'
import { useToggle } from '@/ui/molecules/useToggle'
import { CategoryManagerRow } from './CategoryManagerRow'
import { AddCategoryPanel } from './AddCategoryPanel'

const COLS = ['Label', 'Color', 'In leads', '']

// Manage labels: add, recolor, delete, toggle each one's lead setting.
export function CategoryManager({ cats }) {
  const adding = useToggle()

  return (
    <Stack gap="md">
      <SectionHeader title="Manage labels" addLabel="New label"
        onAdd={adding.toggle} />
      <Table cols={COLS}>
        {cats.categories.map((c) => (
          <CategoryManagerRow key={c.id} category={c} onColor={cats.setColor}
            onLeads={cats.toggle} onDelete={cats.remove} />
        ))}
      </Table>
      <AddCategoryPanel open={adding.open} onAdd={cats.create} />
    </Stack>
  )
}
