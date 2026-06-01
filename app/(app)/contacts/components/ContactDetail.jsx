import { Stack } from '@/ui/layout/Stack'
import { ContactHeader } from './ContactHeader'
import { EmailEditor } from './EmailEditor'
import { ContactAnswers } from './ContactAnswers'
import { Timeline } from './Timeline'

export function ContactDetail({ contact, onChanged }) {
  const id = contact.id
  const emails = contact.contact_email || []

  return (
    <Stack gap="lg">
      <ContactHeader contact={contact} onChanged={onChanged} />
      <EmailEditor contactId={id} emails={emails} onChanged={onChanged} />
      <ContactAnswers contactId={id} />
      <Timeline contactId={id} />
    </Stack>
  )
}
