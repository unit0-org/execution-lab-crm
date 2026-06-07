'use client'

import { useCategories } from '../hooks/useCategories'
import { useContactCategories } from '../hooks/useContactCategories'
import { LabelMenu } from './LabelMenu'

// The contact's labels, edited through the Gmail-style label menu.
export function ContactCategory({ contact, onChanged }) {
  const cats = useCategories(onChanged)
  const picked = useContactCategories(contact, onChanged)
  const stateOf = (id) => (picked.ids.includes(id) ? 'on' : 'off')

  return (
    <LabelMenu cats={cats} stateOf={stateOf} onToggle={picked.toggle}
      label="Label" />
  )
}
