'use client'

import { Inline } from '@/ui/layout/Inline'
import { IconButton } from '@/ui/atoms/IconButton'
import { GearIcon } from '@/ui/atoms/GearIcon'
import { Modal } from '@/ui/organisms/Modal'
import { CategorySelect } from './CategorySelect'
import { CategoryManager } from './CategoryManager'
import { useReveal } from '../hooks/useReveal'
import { useCategories } from '../hooks/useCategories'

export function ContactCategory({ contact, onChanged }) {
  const manage = useReveal()
  const cats = useCategories(onChanged)

  return (
    <Inline gap="sm">
      <CategorySelect contact={contact} categories={cats.categories}
        onChanged={onChanged} />
      <IconButton label="Manage categories" onClick={manage.show}>
        <GearIcon size={18} />
      </IconButton>
      <Modal open={manage.shown} onClose={manage.hide}>
        <CategoryManager cats={cats} />
      </Modal>
    </Inline>
  )
}
