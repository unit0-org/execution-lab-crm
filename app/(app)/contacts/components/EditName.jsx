'use client'

import { IconButton } from '@/ui/atoms/IconButton'
import { Icon } from '@/ui/atoms/Icon'
import { EditNameModal } from './EditNameModal'
import { useReveal } from '../hooks/useReveal'

// The edit-name trigger and its modal, kept together so the header stays
// a thin row of controls.
export function EditName({ contact, onChanged }) {
  const edit = useReveal()

  return (
    <>
      <IconButton label="Edit name" onClick={edit.show}>
        <Icon name="pencil" />
      </IconButton>
      <EditNameModal contact={contact} open={edit.shown}
        onClose={edit.hide} onChanged={onChanged} />
    </>
  )
}
