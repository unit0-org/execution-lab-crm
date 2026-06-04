'use client'

import { Modal } from '@/ui/organisms/Modal'
import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { Button } from '@/ui/atoms/Button'
import { CategoryRow } from './CategoryRow'
import { CategoryList } from './CategoryList'
import { AddCategoryForm } from './AddCategoryForm'
import { useCategories } from '../hooks/useCategories'

export function CategoryModal({ open, onClose, currentId, onAssign }) {
  const { categories, create, toggle } = useCategories()

  return (
    <Modal open={open} onClose={onClose}>
      <Stack gap="sm">
        <Heading level={3} gutter="none">Category</Heading>
        <CategoryRow label="Lead (default)" active={!currentId}
          onSelect={() => onAssign(null)} />
        <CategoryList categories={categories} currentId={currentId}
          onAssign={onAssign} onToggle={toggle} />
        <AddCategoryForm onAdd={create} />
        <Button onClick={onClose}>Close</Button>
      </Stack>
    </Modal>
  )
}
