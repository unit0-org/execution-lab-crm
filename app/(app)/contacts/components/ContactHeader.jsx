'use client'

import { PageHeader } from '@/ui/organisms/PageHeader'
import { ContactHeading } from './ContactHeading'
import { ContactGoogleSync } from './ContactGoogleSync'
import { ContactCategory } from './ContactCategory'
import { EditName } from './EditName'
import { DeleteContact } from './DeleteContact'
import { PortalInvite } from './PortalInvite'
import { ContactAddMenu } from './ContactAddMenu'

export function ContactHeader({
  contact, onChanged, googleLink, portalMember, act
}) {
  return (
    <PageHeader title={<ContactHeading contact={contact} />}
      actions={
        <>
          <ContactGoogleSync link={googleLink} />
          <EditName contact={contact} onChanged={onChanged} />
          <DeleteContact contactId={contact.id} />
          <ContactCategory contact={contact} onChanged={onChanged} />
          <PortalInvite contact={contact} portalMember={portalMember} />
          <ContactAddMenu act={act} />
        </>
      } />
  )
}
