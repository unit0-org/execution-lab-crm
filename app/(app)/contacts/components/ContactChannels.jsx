'use client'

import { Stack } from '@/ui/layout/Stack'
import { ContactEmails } from './ContactEmails'
import { ContactPhones } from './ContactPhones'
import { ContactLinkedIn } from './ContactLinkedIn'

export function ContactChannels({ contact, onChanged }) {
  const id = contact.id
  const emails = contact.contact_email || []
  const phones = contact.contact_phone || []

  return (
    <Stack gap="sm">
      <ContactEmails contactId={id} emails={emails} onChanged={onChanged} />
      <ContactPhones contactId={id} phones={phones} onChanged={onChanged} />
      <ContactLinkedIn contactId={id} url={contact.linkedin_url}
        onChanged={onChanged} />
    </Stack>
  )
}
