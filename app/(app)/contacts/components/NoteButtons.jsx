'use client'

import { IconButton } from '@/ui/atoms/IconButton'
import { Icon } from '@/ui/atoms/Icon'
import { HoverReveal } from '@/ui/atoms/HoverReveal'

export function NoteButtons({ onEdit, onDelete }) {
  return (
    <HoverReveal>
      <IconButton label="Edit note" onClick={onEdit}>
        <Icon name="pencil" size={16} />
      </IconButton>
      <IconButton label="Delete note" tone="danger" onClick={onDelete}>
        <Icon name="trash" size={16} />
      </IconButton>
    </HoverReveal>
  )
}
