import { Stack } from '@/ui/layout/Stack'
import { ContactHeader } from './ContactHeader'
import { TotalSpent } from './TotalSpent'
import { ContactEmails } from './ContactEmails'
import { ContactPhones } from './ContactPhones'
import { ContactLinkedIn } from './ContactLinkedIn'
import { ContactAnswers } from './ContactAnswers'
import { Timeline } from './Timeline'

export function ContactDetail({ contact, onChanged }) {
  const id = contact.id
  const emails = contact.contact_email || []
  const phones = contact.contact_phone || []

  return (
    <Stack gap="lg">
      <ContactHeader contact={contact} onChanged={onChanged} />
      <TotalSpent contactId={id} />
      <Stack gap="sm">
        <ContactEmails contactId={id} emails={emails} onChanged={onChanged} />
        <ContactPhones contactId={id} phones={phones} onChanged={onChanged} />
        <ContactLinkedIn contactId={id} url={contact.linkedin_url}
          onChanged={onChanged} />
      </Stack>
      <ContactAnswers contactId={id} />
      <Timeline contactId={id} />
    </Stack>
  )
}
