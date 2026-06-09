'use client'

import { Inline } from '@/ui/layout/Inline'
import { IconButton } from '@/ui/atoms/IconButton'
import { Icon } from '@/ui/atoms/Icon'
import { ContactHeading } from './ContactHeading'
import { ContactGoogleSync } from './ContactGoogleSync'
import { ContactCategory } from './ContactCategory'
import { EditNameModal } from './EditNameModal'
import { DeleteContact } from './DeleteContact'
import { useReveal } from '../hooks/useReveal'

export function ContactHeader({ contact, onChanged }) {
  const edit = useReveal()

  return (
    <Inline gap="sm">
      <ContactHeading contact={contact} />
      <ContactGoogleSync contactId={contact.id} />
      <IconButton label="Edit name" onClick={edit.show}>
        <Icon name="pencil" />
      </IconButton>
      <DeleteContact contactId={contact.id} />
      <ContactCategory contact={contact} onChanged={onChanged} />
      <EditNameModal contact={contact} open={edit.shown}
        onClose={edit.hide} onChanged={onChanged} />
    </Inline>
  )
}
