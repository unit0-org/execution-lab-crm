import { Stack } from '@/ui/layout/Stack'
import { ContactHeader } from './ContactHeader'
import { ContactEmails } from './ContactEmails'
import { ContactPhones } from './ContactPhones'
import { ContactAnswers } from './ContactAnswers'
import { Timeline } from './Timeline'

export function ContactDetail({ contact, onChanged }) {
  const id = contact.id
  const emails = contact.contact_email || []
  const phones = contact.contact_phone || []

  return (
    <Stack gap="lg">
      <ContactHeader contact={contact} onChanged={onChanged} />
      <ContactEmails contactId={id} emails={emails} onChanged={onChanged} />
      <ContactPhones contactId={id} phones={phones} onChanged={onChanged} />
      <ContactAnswers contactId={id} />
      <Timeline contactId={id} />
    </Stack>
  )
}
