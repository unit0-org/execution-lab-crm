'use client'

import { Inline } from '@/ui/layout/Inline'
import { CategoryBadges } from './CategoryBadges'
import { CategoryPicker } from './CategoryPicker'

export function ContactCategory({ contact, onChanged }) {
  const categories = contact.categories || []

  return (
    <Inline gap="sm">
      <CategoryBadges categories={categories} />
      <CategoryPicker contact={contact} onChanged={onChanged} />
    </Inline>
  )
}
