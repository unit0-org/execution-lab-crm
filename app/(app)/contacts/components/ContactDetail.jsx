import { Stack } from '@/ui/layout/Stack'
import { Columns } from '@/ui/layout/Columns'
import { Heading } from '@/ui/atoms/Heading'
import { EditableField } from './EditableField'
import { EmailEditor } from './EmailEditor'
import { Timeline } from './Timeline'
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
      <Columns>
        <EditableField label="First name" value={contact.first_name}
          action={updateContactAction} hidden={at('first_name')} />
        <EditableField label="Last name" value={contact.last_name}
          action={updateContactAction} hidden={at('last_name')} />
      </Columns>
      <EmailEditor contactId={id} emails={emails} onChanged={onChanged} />
      <Timeline contactId={id} />
      <DeleteContact contactId={id} />
    </Stack>
  )
}
