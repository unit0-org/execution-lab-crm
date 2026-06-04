'use client'

import { Inline } from '@/ui/layout/Inline'
import { Badge } from '@/ui/atoms/Badge'
import { IconButton } from '@/ui/atoms/IconButton'
import { Icon } from '@/ui/atoms/Icon'
import { CategoryModal } from './CategoryModal'
import { useAssignCategory } from '../hooks/useAssignCategory'
import { useReveal } from '../hooks/useReveal'

export function ContactCategory({ contact, onChanged }) {
  const edit = useReveal()
  const assign = useAssignCategory(contact.id, onChanged)
  const name = contact.category?.name || 'Lead'

  return (
    <Inline gap="sm">
      <Badge tone="neutral">{name}</Badge>
      <IconButton label="Edit category" onClick={edit.show}>
        <Icon name="pencil" size={16} />
      </IconButton>
      <CategoryModal open={edit.shown} onClose={edit.hide}
        currentId={contact.category_id} onAssign={assign} />
    </Inline>
  )
}
