'use client'

import { Button } from '@/ui/atoms/Button'
import { Popover } from '@/ui/molecules/Popover'
import { CategoryMenu } from './CategoryMenu'
import { useReveal } from '../hooks/useReveal'

export function CategoryPicker({ contact, onChanged }) {
  const menu = useReveal()
  const trigger = (
    <Button size="sm" onClick={menu.toggle}>Edit categories</Button>
  )

  return (
    <Popover open={menu.shown} onClose={menu.hide} trigger={trigger}>
      <CategoryMenu contact={contact} onChanged={onChanged} />
    </Popover>
  )
}
