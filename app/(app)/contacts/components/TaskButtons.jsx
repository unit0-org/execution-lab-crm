'use client'

import { IconButton } from '@/ui/atoms/IconButton'
import { Icon } from '@/ui/atoms/Icon'
import { HoverReveal } from '@/ui/atoms/HoverReveal'

export function TaskButtons({ onEdit, onDelete }) {
  return (
    <HoverReveal>
      <IconButton label="Edit task" onClick={onEdit}>
        <Icon name="pencil" size={16} />
      </IconButton>
      <IconButton label="Delete task" tone="danger" onClick={onDelete}>
        <Icon name="trash" size={16} />
      </IconButton>
    </HoverReveal>
  )
}
