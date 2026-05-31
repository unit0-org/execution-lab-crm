import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { EditableField } from './EditableField'
import { ContactEmails } from './ContactEmails'
import { DeleteContact } from './DeleteContact'
import { ContactName } from './ContactName'

export function ContactDetail({ contact }) {
  const emails = contact.contact_email || []

  return (
    <Stack gap="lg">
      <Heading><ContactName contact={contact} /></Heading>
      <EditableField contactId={contact.id} field="first_name"
        label="First name" value={contact.first_name} />
      <EditableField contactId={contact.id} field="last_name"
        label="Last name" value={contact.last_name} />
      <ContactEmails emails={emails} />
      <DeleteContact contactId={contact.id} />
    </Stack>
  )
}
