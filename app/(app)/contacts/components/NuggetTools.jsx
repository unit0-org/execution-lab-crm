'use client'

import { useReveal } from '../hooks/useReveal'
import { NuggetButtons } from './NuggetButtons'
import { EditNuggetModal } from './EditNuggetModal'
import { DeleteNuggetModal } from './DeleteNuggetModal'

export function NuggetTools({ nugget, onChanged }) {
  const edit = useReveal()
  const remove = useReveal()

  return (
    <>
      <NuggetButtons onEdit={edit.show} onDelete={remove.show} />
      <EditNuggetModal open={edit.shown} nugget={nugget}
        onSaved={onChanged} onClose={edit.hide} />
      <DeleteNuggetModal open={remove.shown} nugget={nugget}
        onDeleted={onChanged} onClose={remove.hide} />
    </>
  )
}
