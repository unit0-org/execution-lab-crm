'use client'

import { IconButton } from '@/ui/atoms/IconButton'
import { Icon } from '@/ui/atoms/Icon'
import { useReveal } from '../hooks/useReveal'
import { EditNuggetModal } from './EditNuggetModal'
import { DeleteNuggetModal } from './DeleteNuggetModal'

export function NuggetTools({ nugget, onChanged }) {
  const edit = useReveal()
  const remove = useReveal()

  if (!nugget.id.startsWith('fact:')) return null

  return (
    <>
      <IconButton label="Edit nugget" onClick={edit.show}>
        <Icon name="pencil" size={16} />
      </IconButton>
      <IconButton label="Delete nugget" tone="danger" onClick={remove.show}>
        <Icon name="trash" size={16} />
      </IconButton>
      <EditNuggetModal open={edit.shown} nugget={nugget}
        onSaved={onChanged} onClose={edit.hide} />
      <DeleteNuggetModal open={remove.shown} nugget={nugget}
        onDeleted={onChanged} onClose={remove.hide} />
    </>
  )
}
