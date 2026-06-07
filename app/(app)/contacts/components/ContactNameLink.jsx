import { Link } from '@/ui/atoms/Link'
import { ContactName } from './ContactName'

// The name cell: the contact's name linking to its detail page.
export function ContactNameLink({ contact }) {
  return (
    <Link href={`/contacts/${contact.id}`}>
      <ContactName contact={contact} />
    </Link>
  )
}
