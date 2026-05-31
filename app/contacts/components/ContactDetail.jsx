import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { EditableField } from './EditableField'
import { EmailEditor } from './EmailEditor'
import { DeleteContact } from './DeleteContact'
import { ContactName } from './ContactName'
import { updateContactAction } from '../actions/updateContact'

export function ContactDetail({ contact, onChanged }) {
  const id = contact.id
  const emails = contact.contact_email || []
  const at = (f) => ({ id, field: f })

  return (
    <Stack gap="lg">
      <Heading><ContactName contact={contact} /></Heading>
      <EditableField label="First name" value={contact.first_name}
        action={updateContactAction} hidden={at('first_name')} />
      <EditableField label="Last name" value={contact.last_name}
        action={updateContactAction} hidden={at('last_name')} />
      <EmailEditor contactId={id} emails={emails} onChanged={onChanged} />
      <DeleteContact contactId={id} />
    </Stack>
  )
}
