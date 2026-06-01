'use client'

import { Inline } from '@/ui/layout/Inline'
import { Heading } from '@/ui/atoms/Heading'
import { IconButton } from '@/ui/atoms/IconButton'
import { Icon } from '@/ui/atoms/Icon'
import { ContactName } from './ContactName'
import { EditNameModal } from './EditNameModal'
import { DeleteContact } from './DeleteContact'
import { useReveal } from '../hooks/useReveal'

export function ContactHeader({ contact, onChanged }) {
  const edit = useReveal()

  return (
    <Inline gap="sm">
      <Heading gutter="none"><ContactName contact={contact} /></Heading>
      <IconButton label="Edit name" onClick={edit.show}>
        <Icon name="pencil" />
      </IconButton>
      <DeleteContact contactId={contact.id} />
      <EditNameModal contact={contact} open={edit.shown}
        onClose={edit.hide} onChanged={onChanged} />
    </Inline>
  )
}
