'use client'

import { Inline } from '@/ui/layout/Inline'
import { ContactHeading } from './ContactHeading'
import { ContactGoogleSync } from './ContactGoogleSync'
import { ContactCategory } from './ContactCategory'
import { EditName } from './EditName'
import { DeleteContact } from './DeleteContact'
import { PortalInvite } from './PortalInvite'

export function ContactHeader({
  contact, onChanged, googleLink, portalMember
}) {
  return (
    <Inline gap="sm">
      <ContactHeading contact={contact} />
      <ContactGoogleSync link={googleLink} />
      <EditName contact={contact} onChanged={onChanged} />
      <DeleteContact contactId={contact.id} />
      <ContactCategory contact={contact} onChanged={onChanged} />
      <PortalInvite contact={contact} portalMember={portalMember} />
    </Inline>
  )
}
