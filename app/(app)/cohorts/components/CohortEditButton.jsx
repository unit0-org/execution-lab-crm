'use client'

import { IconButton } from '@/ui/atoms/IconButton'
import { Icon } from '@/ui/atoms/Icon'

export function CohortEditButton({ cohort, onEdit }) {
  const openEditor = () => onEdit(cohort)

  return (
    <IconButton label="Edit cohort" onClick={openEditor}>
      <Icon name="pencil" size={16} />
    </IconButton>
  )
}
