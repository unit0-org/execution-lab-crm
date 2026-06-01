import { Tr } from '@/ui/molecules/Tr'
import { Td } from '@/ui/molecules/Td'
import { Link } from '@/ui/atoms/Link'
import { ContactName } from './ContactName'

const emails = (c) =>
  (c.contact_email || []).map((e) => e.email).join(', ')

export function ContactRow({ contact }) {
  return (
    <Tr>
      <Td>
        <Link href={`/contacts/${contact.id}`}>
          <ContactName contact={contact} />
        </Link>
      </Td>
      <Td>{emails(contact)}</Td>
    </Tr>
  )
}
